// 画像クリック時のプレビュー表示
document.addEventListener("DOMContentLoaded", () => {
  if (window.mediumZoom) {
    window.mediumZoom('.content img', {
      margin: 24,
      background: 'rgba(0,0,0,0.75)',
      scrollOffset: 0,
    });
  }
});
