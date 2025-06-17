export async function getPreview(url) {
    const API_KEY = "479caf1751a010ec074397313794465c"; // LinkPreview API
    const apiUrl = `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`;

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTPエラー: ${res.status}`);
        const data = await res.json();

        // プロキシ経由で画像を取得
        const rawImageUrl = data.image || "https://placehold.co/300x200";
        const proxiedImageUrl = `https://proxy-server-89ba.onrender.com/proxy?url=${encodeURIComponent(rawImageUrl)}`;
        return proxiedImageUrl;
    } catch (error) {
        console.error("画像URL取得エラー:", error);
        return "https://placehold.co/300x200";
    }
}
