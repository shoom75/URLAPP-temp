import { supabase } from "./supabaseClient.js";

/**
 * URLとサムネイルURLを Supabase に保存する（グループID対応）
 * 画像取得の成否・リトライ回数も保存
 */
export async function addUrl(url, title, category, userId, imageUrl, isImageValid, groupId) {
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("urls")
    .insert([{
      url,
      title,
      category,
      user_id: userId,
      thumbnail_url: imageUrl,
      group_id: groupId,
      is_image_valid: isImageValid,
      image_last_checked: now,
      image_retry_count: 0
    }]);

  console.log("addUrl: 登録内容", {
    url,
    title,
    category,
    userId,
    imageUrl,
    isImageValid,
    groupId,
    now
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error };
  }

  console.log("addUrl: 登録結果", data);
  return { success: true, data };
}

/**
 * Supabase の "urls" テーブルからデータを取得する関数（グループIDで絞り込み可能）
 */
export async function fetchUrls(groupId) {
  let query = supabase
    .from("urls")
    .select("id, url, title, category, user_id, thumbnail_url, visited, created_at, group_id")
    .order("created_at", { ascending: false });

  if (groupId) {
    query = query.eq("group_id", groupId);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase fetch error:", error);
    return [];
  }
  return data;
}

/**
 * 指定されたIDのURLを Supabase から削除する
 */
export async function deleteUrl(id) {
  const { data, error } = await supabase
    .from("urls")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Supabase delete error:", error);
    return { success: false, error };
  }
  return { success: true, data };
}

/**
 * 画像再取得処理（失敗時・プレースホルダー時・画像失効時も対応）
 */
export async function retryImageForUrl(urlId, getPreview, maxRetry = 3) {
  const { data, error } = await supabase.from("urls").select("*").eq("id", urlId).single();
  if (error || !data) return { success: false, error };

  const { is_image_valid, thumbnail_url, image_retry_count, url } = data;
  const isPlaceholder = !thumbnail_url || thumbnail_url.includes("placehold.co");

  // リトライ回数制限
  if (image_retry_count >= maxRetry) {
    return { success: false, message: "Retry limit reached" };
  }

  // 有効だけどプレースホルダじゃない → 再取得不要
  if (is_image_valid && !isPlaceholder) {
    return { success: true, message: "Already valid and not placeholder" };
  }

  // 再取得を実行
  const newImageUrl = await getPreview(url);
  const isValid = newImageUrl && !newImageUrl.includes("placehold.co");
  const now = new Date().toISOString();
  const newRetryCount = isValid ? 0 : image_retry_count + 1;

  const { error: updateError } = await supabase.from("urls").update({
    thumbnail_url: newImageUrl,
    is_image_valid: isValid,
    image_last_checked: now,
    image_retry_count: newRetryCount
  }).eq("id", urlId);

  if (updateError) return { success: false, error: updateError };
  return { success: true, isImageValid: isValid };
}
