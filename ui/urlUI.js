import { addUrl, deleteUrl } from "../utils/dbOperations.js";
import { getPreview } from "../utils/fetchPreview.js";
import { supabase } from "../utils/supabaseClient.js";
import { getProxyUrl } from "./sharedUI.js";

let lastUrlsJson = "";

export function setupUrlHandlers() {
    const urlForm = document.getElementById("urlForm");
    const urlInput = document.getElementById("urlInput");
    const titleInput = document.getElementById("titleInput");
    const categoryInput = document.getElementById("categoryInput");
    const urlList = document.getElementById("urlList");
    const toggleBtn = document.getElementById("toggleFormBtn");

    toggleBtn.addEventListener("click", () => {
        if (!window.currentGroupId) {
            alert("グループを選択してください");
            return;
        }
        const showing = urlForm.style.display === "flex";
        urlForm.style.display = showing ? "none" : "flex";
        toggleBtn.innerText = showing ? "＋ URLを登録" : "× 閉じる";
    });

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
            const result = await addUrl(rawUrl, title, category, window.currentUser.id, imageUrl, window.currentGroupId);
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

    window.loadUrls = async function loadUrls() {
        if (!window.currentUser || !window.currentGroupId) {
            urlList.innerHTML = "";
            lastUrlsJson = "";
            return;
        }
        const { data: urls } = await supabase
            .from("urls")
            .select("*")
            .eq("group_id", window.currentGroupId);

        const urlsJson = JSON.stringify(urls);
        if (urlsJson === lastUrlsJson) return;
        lastUrlsJson = urlsJson;

        urlList.innerHTML = "";
        if (!urls || urls.length === 0) {
            urlList.innerHTML = "<li>このグループにはURLがありません</li>";
            return;
        }
        urls.forEach(({ id, url, title, thumbnail_url }) => {
            const proxyThumbnail = thumbnail_url ? getProxyUrl(thumbnail_url) : "https://placehold.co/80x80";
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
            img.onerror = () => (img.src = "https://placehold.co/80x80");
            img.src = proxyThumbnail;

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
        });
    };
}