importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! workbox is loaded 🎉`);

  workbox.skipWaiting();
  workbox.clientsClaim();

  workbox.precaching.precacheAndRoute([
    '/js/index2.js',
    '/css/index1.css',
    {
      url: '/index.html',
      revision: '383676'
    },
  ]);

  workbox.precaching.suppressWarnings();

  workbox.routing.registerRoute(/.*\.(?:html)/g, workbox.strategies.staleWhileRevalidate(), 'GET');
  workbox.routing.registerRoute(/.*\.(?:css)/g, workbox.strategies.cacheFirst(), 'GET');


}
else {
  console.log(`Boo! workbox didn't load 😬`);
}