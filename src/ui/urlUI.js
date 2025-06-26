import { addUrl, deleteUrl, retryImageForUrl } from "../utils/dbOperations.js";
import { getPreview } from "../utils/fetchPreview.js";
import { supabase } from "../utils/supabaseClient.js";

let lastUrlsJson = "";
let lastUrlIds = new Set();

export function setupUrlHandlers() {
    const urlForm = document.getElementById("urlForm");
    const urlInput = document.getElementById("urlInput");
    const titleInput = document.getElementById("titleInput");
    const categoryInput = document.getElementById("categoryInput");
    const urlList = document.getElementById("urlList");
    const toggleBtn = document.getElementById("toggleFormBtn");

    // URL登録フォームの開閉ボタン
    toggleBtn.addEventListener("click", () => {
        if (!window.currentGroupId) {
            alert("グループを選択してください");
            return;
        }
        const showing = urlForm.style.display === "flex";
        urlForm.style.display = showing ? "none" : "flex";
        toggleBtn.innerText = showing ? "＋ URLを登録" : "× 閉じる";
    });

    // URL登録フォーム送信処理
    urlForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!window.currentUser || !window.currentGroupId) {
            alert("グループを選択してください");
            return;
        }
        const rawUrl = urlInput.value.trim();
        const title = titleInput.value.trim();
        const category = categoryInput.value.trim();
        if (!rawUrl || !title || !category) {
            alert("すべての項目を入力してください");
            return;
        }
        try {
            const imageUrl = await getPreview(rawUrl);
            const isImageValid = imageUrl && !imageUrl.includes('placehold.co');

            const result = await addUrl(
                rawUrl,
                title,
                category,
                window.currentUser.id,
                imageUrl,
                isImageValid,
                window.currentGroupId
            );

            if (result.success) {
                urlForm.reset();
                urlForm.style.display = "none";
                toggleBtn.innerText = "＋ URLを登録";
                await loadUrls();
            } else {
                alert("登録に失敗しました");
            }
        } catch (err) {
            alert("エラーが発生しました");
            console.error(err);
        }
    });

    // 画像再取得処理をまとめた関数
    async function handleImageError(img, urlId) {
        if (img.dataset.retried) {
            img.src = "https://placehold.co/80x80";
            return;
        }
        img.dataset.retried = "true";

        const res = await retryImageForUrl(urlId, getPreview, 3);
        if (res.success && res.isImageValid) {
            const { data: updatedData, error } = await supabase
                .from("urls")
                .select("thumbnail_url")
                .eq("id", urlId)
                .single();
            if (!error && updatedData?.thumbnail_url) {
                img.src = updatedData.thumbnail_url;
            } else {
                img.src = "https://placehold.co/80x80";
            }
        } else {
            img.src = "https://placehold.co/80x80";
        }
    }

    // リアルタイムURL追加監視用サブスクリプション
    let urlSubscription = null;
    function subscribeRealtimeUrls() {
        if (urlSubscription) {
            supabase.removeChannel(urlSubscription);
            urlSubscription = null;
        }
        if (!window.currentGroupId) return;
        urlSubscription = supabase
            .channel('urls-realtime')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'urls',
                    filter: `group_id=eq.${window.currentGroupId}`
                },
                () => {
                    window.loadUrls && window.loadUrls();
                }
            )
            .subscribe();
    }

    // グループ切替時にサブスクリプション更新
    window.addEventListener("setCurrentGroup", () => {
        subscribeRealtimeUrls();
    });

    subscribeRealtimeUrls();

    // URL一覧読み込み＆表示
    window.loadUrls = async function loadUrls() {
        if (!window.currentUser || !window.currentGroupId) {
            urlList.innerHTML = "";
            lastUrlsJson = "";
            lastUrlIds = new Set();
            return;
        }
        const { data: urls } = await supabase
            .from("urls")
            .select("*")
            .eq("group_id", window.currentGroupId);

        const urlsJson = JSON.stringify(urls);
        if (urlsJson === lastUrlsJson) return; // 差分なし
        lastUrlsJson = urlsJson;

        urlList.innerHTML = "";
        lastUrlIds = new Set();

        if (!urls || urls.length === 0) {
            urlList.innerHTML = "<li>このグループにはURLがありません</li>";
            return;
        }

        urls.forEach(({ id, url, title, thumbnail_url }) => {
            const proxyThumbnail = thumbnail_url ? thumbnail_url : "https://placehold.co/80x80";

            const li = document.createElement("li");
            li.dataset.id = id;
            li.style.display = "flex";
            li.style.alignItems = "center";
            li.style.gap = "12px";
            li.style.margin = "10px 0";

            const img = document.createElement("img");
            img.width = 80;
            img.height = 80;
            img.alt = "サムネイル";
            img.style.objectFit = "cover";
            img.src = proxyThumbnail;

            // プレースホルダなら即再取得トリガー（エラー待たずに）
            if (proxyThumbnail.includes("placehold.co")) {
                handleImageError(img, id);
            }

            img.onerror = async () => {
                await handleImageError(img, id);
            };

            const link = document.createElement("a");
            link.target = "_blank";
            link.style.flex = "1";
            link.style.fontSize = "16px";
            link.style.fontWeight = "bold";
            link.style.color = "#E76F51";
            link.style.textDecoration = "none";
            link.href = url;
            link.innerText = title;

            const btn = document.createElement("button");
            btn.innerText = "削除";
            btn.classList.add("btn-delete");
            btn.onclick = async () => {
                if (!confirm(`「${title}」を削除しますか？`)) return;
                const { success, error } = await deleteUrl(id);
                if (success) {
                    loadUrls();
                } else {
                    alert("削除に失敗しました");
                    console.error(error);
                }
            };

            li.append(img, link, btn);
            urlList.appendChild(li);
            lastUrlIds.add(id);
        });
    };

    // 7秒ごとに差分だけをポーリングで追加更新
    setInterval(async () => {
        if (!window.currentUser || !window.currentGroupId) return;
        const { data: urls } = await supabase
            .from("urls")
            .select("*")
            .eq("group_id", window.currentGroupId);

        if (!urls) return;

        const newUrls = urls.filter(u => !lastUrlIds.has(u.id));
        if (newUrls.length > 0) {
            newUrls.forEach(({ id, url, title, thumbnail_url }) => {
                const proxyThumbnail = thumbnail_url ? thumbnail_url : "https://placehold.co/80x80";

                const li = document.createElement("li");
                li.dataset.id = id;
                li.style.display = "flex";
                li.style.alignItems = "center";
                li.style.gap = "12px";
                li.style.margin = "10px 0";

                const img = document.createElement("img");
                img.width = 80;
                img.height = 80;
                img.alt = "サムネイル";
                img.style.objectFit = "cover";
                img.src = proxyThumbnail;
                img.onerror = () => (img.src = "https://placehold.co/80x80");

                const link = document.createElement("a");
                link.target = "_blank";
                link.style.flex = "1";
                link.style.fontSize = "16px";
                link.style.fontWeight = "bold";
                link.style.color = "#E76F51";
                link.style.textDecoration = "none";
                link.href = url;
                link.innerText = title;

                const btn = document.createElement("button");
                btn.innerText = "削除";
                btn.classList.add("btn-delete");
                btn.onclick = async () => {
                    if (!confirm(`「${title}」を削除しますか？`)) return;
                    const { success, error } = await deleteUrl(id);
                    if (success) {
                        li.remove();
                        lastUrlIds.delete(id);
                    } else {
                        alert("削除に失敗しました");
                        console.error(error);
                    }
                };

                li.append(img, link, btn);
                urlList.appendChild(li);
                lastUrlIds.add(id);
            });
        }

        if (lastUrlIds.size !== urls.length) {
            urlList.innerHTML = "";
            lastUrlIds = new Set();
            urls.forEach(({ id, url, title, thumbnail_url }) => {
                const proxyThumbnail = thumbnail_url ? thumbnail_url : "https://placehold.co/80x80";

                const li = document.createElement("li");
                li.dataset.id = id;
                li.style.display = "flex";
                li.style.alignItems = "center";
                li.style.gap = "12px";
                li.style.margin = "10px 0";

                const img = document.createElement("img");
                img.width = 80;
                img.height = 80;
                img.alt = "サムネイル";
                img.style.objectFit = "cover";
                img.src = proxyThumbnail;
                img.onerror = () => (img.src = "https://placehold.co/80x80");

                const link = document.createElement("a");
                link.target = "_blank";
                link.style.flex = "1";
                link.style.fontSize = "16px";
                link.style.fontWeight = "bold";
                link.style.color = "#E76F51";
                link.style.textDecoration = "none";
                link.href = url;
                link.innerText = title;

                const btn = document.createElement("button");
                btn.innerText = "削除";
                btn.classList.add("btn-delete");
                btn.onclick = async () => {
                    if (!confirm(`「${title}」を削除しますか？`)) return;
                    const { success, error } = await deleteUrl(id);
                    if (success) {
                        li.remove();
                        lastUrlIds.delete(id);
                    } else {
                        alert("削除に失敗しました");
                        console.error(error);
                    }
                };

                li.append(img, link, btn);
                urlList.appendChild(li);
                lastUrlIds.add(id);
            });
        }
    }, 7000);
}
