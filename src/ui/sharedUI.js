export function closeAllForms() {
    const createform = document.getElementById("createform");
    if (createform) createform.style.display = "none";
    const joinform = document.getElementById("joinform");
    if (joinform) joinform.style.display = "none";
    const inviteCodeArea = document.getElementById("inviteCodeArea");
    if (inviteCodeArea) inviteCodeArea.style.display = "none";
    const groupListArea = document.getElementById("groupListArea");
    if (groupListArea) groupListArea.style.display = "none";
}

export function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("authMessage").textContent = "";
}
export function showSignUpForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
    document.getElementById("authMessage").textContent = "";
}

export function showLoginSection() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("appSection").style.display = "none";
    showLoginForm();
}
export function showAppSection() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("appSection").style.display = "block";
}
export function setCurrentGroup(groupId, groupName) {
    window.currentGroupId = groupId;
    window.currentGroupName = groupName;
    const currentGroupLabel = document.getElementById("currentGroupLabel");
    currentGroupLabel.textContent = `グループ: ${groupName}`;
    const urlForm = document.getElementById("urlForm");
    urlForm.style.display = "none";
    const toggleBtn = document.getElementById("toggleFormBtn");
    toggleBtn.innerText = "＋ URLを登録";
    toggleBtn.style.display = "inline-block"; // グループ選択時に表示
    closeAllForms(); // グループ選択時にメニューや招待コードを閉じる
    window.loadUrls();
    window.dispatchEvent(new Event("setCurrentGroup"));
}
export function resetGroupSelection() {
    window.currentGroupId = null;
    window.currentGroupName = "";
    const currentGroupLabel = document.getElementById("currentGroupLabel");
    currentGroupLabel.textContent = "グループ未選択";
    const urlForm = document.getElementById("urlForm");
    urlForm.style.display = "none";
    const urlList = document.getElementById("urlList");
    urlList.innerHTML = "";
    const toggleBtn = document.getElementById("toggleFormBtn");
    if (toggleBtn) toggleBtn.style.display = "none"; // グループ未選択時は非表示
    closeAllForms(); // リセット時にも全て閉じる
}

const PROXY_BASE_URL = "https://proxy-worker.shoom7575.workers.dev/";
export function getProxyUrl(imageUrl) {
    return `${PROXY_BASE_URL}?url=${encodeURIComponent(imageUrl)}`;
}