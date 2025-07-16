// ページが読み込まれたときに init 関数を呼び出す
window.onload=init;
// 用語を隠す＆クリックで表示する関数
function init(){
    console.log("init関数が呼び出された！"); 
    // span.word をすべて取得
    let words=document.querySelectorAll("span.word");
      // 1つずつ順番に処理するための繰り返し
    for(let i=0;i<words.length;i++){
        let y=words[i];// i番目の要素を変数yに入れる（1個ずつ操作するため）
        console.log("現在の要素:", y);
        // テキスト内容（中の文字）を答えとして保存しておく
        y.answer=y.textContent;
         // 表示される文字を「____」に変える
        y.textContent="____";
        // 要素がクリックされたときの動作を設定
         y.addEventListener("click", function (e) {
            // クリックされた要素（e.target）に答えを戻す
        console.log("クリックされた要素:", e.target);
        console.log("その答え:", e.target.answer);
        e.target.textContent = e.target.answer;
        }
    )}
}