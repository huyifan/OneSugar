/**
 * Created by hugo on 2018/8/29.
 */
// 检查浏览器是否对 serviceWorker 有原生支持

if ('serviceWorker' in navigator) {
  // 为了保证首屏渲染性能，可以在页面 load 完之后注册 Service Worker
  window.onload = function () {
    navigator.serviceWorker.register('/sw.js');
  };


}
