/**
 * Created by hugo on 2018/8/29.
 */
// 检查浏览器是否对 serviceWorker 有原生支持
if ('serviceWorker' in navigator) {
  // 有原生支持时，在页面加载后开启新的 Service Worker 线程，从而优化首屏加载速度
  window.addEventListener('load', function () {
    // register 方法里第一个参数为 Service Worker 要加载的文件；第二个参数 scope 可选，用来指定 Service Worker 控制的内容的子目录
    navigator.serviceWorker.register('/js/sw.js').then(function (registration) {
      // Service Worker 注册成功
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
      // Service Worker 注册失败
      console.log('ServiceWorker registration failed: ', err);
    });
  });


}