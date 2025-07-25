import { supabase } from './supabaseClient.js';

export async function handleLogin(email, password, messageEl) {
    messageEl.textContent = "";
    if (!email || !password) {
        messageEl.textContent = "メールアドレスとパスワードを入力してください";
        messageEl.style.color = "red";
        return false;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        messageEl.textContent = "ログインに失敗しました: " + error.message;
        messageEl.style.color = "red";
        console.error("ログインエラー詳細:", error);
        return false;
    }

    messageEl.textContent = "";
    return true;
}

export async function handleSignUp(email, password, messageEl, onSuccess) {
    messageEl.textContent = "";
    if (!email || !password) {
        messageEl.textContent = "メールアドレスとパスワードを入力してください";
        messageEl.style.color = "red";
        return false;
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        if (error.message.includes("already registered") || error.message.includes("User already registered")) {
            messageEl.textContent = "このメールアドレスはすでに登録されています";
        } else {
            messageEl.textContent = "登録に失敗しました: " + error.message;
        }
        messageEl.style.color = "red";
        console.error("サインアップエラー詳細:", error);
        return false;
    }

    messageEl.style.color = "green";
    messageEl.textContent = "登録成功！確認メールをご確認ください。";
    if (onSuccess) onSuccess();
    return true;
}

export async function logout() {
    // グローバルサインアウトで403になる場合はscope: 'global'を外す
    // await supabase.auth.signOut({ scope: 'global' });
    await supabase.auth.signOut();
}