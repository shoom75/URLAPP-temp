import { supabase } from "./supabaseClient.js";
import { fetchImagePreview } from "./fetchPreview.js";

const MAX_RETRY = 3;

/**
 * URLとサムネイルURLを Supabase に保存する（グループID対応）
 */
export async function addUrl(url, title, category, userId, imageUrl, groupId) {
  const { data, error } = await supabase
    .from("urls")
    .insert([
      { url, title, category, user_id: userId, thumbnail_url: imageUrl, group_id: groupId },
    ]);
  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error };
  }
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
 * サムネイル画像取得結果をurlsテーブルに保存
 */
export async function updateImageStatus(id, isValid, retryCount) {
    await supabase
        .from("urls")
        .update({
            is_image_valid: isValid,
            image_last_checked: new Date().toISOString(),
            image_retry_count: retryCount
        })
        .eq("id", id);
}

/**
 * 指定IDのリトライ回数を取得
 */
export async function getImageRetryCount(id) {
    const { data } = await supabase
        .from("urls")
        .select("image_retry_count")
        .eq("id", id)
        .single();
    return data?.image_retry_count ?? 0;
}

/**
 * サムネイル画像取得＆DB更新（リトライ管理含む）
 * @param {string} url
 * @param {number} id
 * @returns {string} 画像URL
 */
export async function getAndUpdateImagePreview(url, id) {
    const { isValid, proxiedImageUrl } = await fetchImagePreview(url);

    const { data } = await supabase
        .from("urls")
        .select("image_retry_count")
        .eq("id", id)
        .single();
    const retryCount = data?.image_retry_count ?? 0;

    let newRetryCount = isValid ? 0 : retryCount + 1;
    let newIsValid = isValid;

    if (!isValid && newRetryCount >= MAX_RETRY) {
        newIsValid = false;
    }

    await supabase
        .from("urls")
        .update({
            is_image_valid: newIsValid,
            image_last_checked: new Date().toISOString(),
            image_retry_count: newRetryCount,
            thumbnail_url: proxiedImageUrl
        })
        .eq("id", id);

    return proxiedImageUrl;
}

/**
 * Instagramの画像URLをリトライ
 */
export async function retryInstagramImageUrl(instagramPostUrl, id) {
    return await getAndUpdateImagePreview(instagramPostUrl, id);
}
