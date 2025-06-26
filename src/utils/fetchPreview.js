// import { supabase } from "./supabaseClient.js";
// import { getImageRetryCount, updateImageStatus } from "./dbOperations.js";

const API_KEY = "479caf1751a010ec074397313794465c";
const PLACEHOLDER_URL = "https://placehold.co/300x200";
const proxyImageUrl = (url) =>
  `https://proxy-worker.shoom7575.workers.dev/?url=${encodeURIComponent(url)}`;

/**
 * サムネイル画像URLを取得し、成否と画像URLを返す
 * @param {string} url - 対象URL
 * @returns {{ isValid: boolean, proxiedImageUrl: string }}
 */
export async function fetchImagePreview(url) {
  try {
    const res = await fetch(
      `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`
    );
    if (!res.ok) throw new Error(`HTTPエラー: ${res.status}`);
    const data = await res.json();
    const imageUrl = data.image || PLACEHOLDER_URL;
    return {
      isValid: !!data.image,
      proxiedImageUrl: proxyImageUrl(imageUrl),
    };
  } catch (err) {
    console.error("画像URL取得エラー:", err);
    return {
      isValid: false,
      proxiedImageUrl: PLACEHOLDER_URL,
    };
  }
}

