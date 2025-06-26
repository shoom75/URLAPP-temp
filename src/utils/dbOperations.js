import { supabase } from "./supabaseClient.js";

/**
 * URLとサムネイルURLを Supabase に保存する（グループID対応）
 * 画像取得の成否・リトライ回数も保存
 */
export async function addUrl(url, title, category, userId, imageUrl, isImageValid, groupId) {
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("urls")
    .insert([
      {
        url,
        title,
        category,
        user_id: userId,
        thumbnail_url: imageUrl,
        group_id: groupId, // ← ここでグループIDも保存
        is_image_valid: isImageValid,
        image_last_checked: now,
        image_retry_count: 0
      },
    ]);
  // 追加した内容をログ出力
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
 * 画像再取得処理（失敗時のみ、最大リトライ回数まで）
 */
export async function retryImageForUrl(urlId, getPreview, maxRetry = 3) {
  const { data, error } = await supabase.from('urls').select('*').eq('id', urlId).single();
  if (error || !data) return { success: false, error };

  // リトライ回数が上限を超えていたら終了
  if (data.image_retry_count >= maxRetry) return { success: false, message: "Retry limit reached" };

  // 画像を再取得
  const imageUrl = await getPreview(data.url);
  const isImageValid = imageUrl && !imageUrl.includes('placehold.co');
  const now = new Date().toISOString();

  // 成功時はリトライ回数を0に戻し、失敗時は+1
  const newRetryCount = isImageValid ? 0 : data.image_retry_count + 1;

  const { error: updateError } = await supabase.from('urls').update({
    thumbnail_url: imageUrl,
    is_image_valid: isImageValid,
    image_last_checked: now,
    image_retry_count: newRetryCount
  }).eq('id', urlId);

  if (updateError) return { success: false, error: updateError };
  return { success: true, isImageValid };
}
