// import { supabase } from "./supabaseClient.js";
// import { getImageRetryCount, updateImageStatus } from "./dbOperations.js";

const API_KEY = "479caf1751a010ec074397313794465c";
const PLACEHOLDER_URL = "https://placehold.co/300x200";
const proxyImageUrl = (url) =>
  `https://proxy-worker.shoom7575.workers.dev/?url=${encodeURIComponent(url)}`;

<<<<<<< master
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
=======
        // プロキシ経由で画像を取得
        const rawImageUrl = data.image || "https://placehold.co/300x200";
       const proxiedImageUrl = `https://proxy-worker.shoom7575.workers.dev/?url=${encodeURIComponent(rawImageUrl)}`;
        return proxiedImageUrl;
    } catch (error) {
        console.error("画像URL取得エラー:", error);
        return "https://placehold.co/300x200";
    }
>>>>>>> main
}

