workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
var thirdUrl = [
  'http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',
  //'http://cdn.bootcss.com/jquery/2.1.1/jquery.min.js',
  'http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css',
  'http://cdn.bootcss.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2',
]


self.__precacheManifest = thirdUrl.concat(self.__precacheManifest || []);
console.log("==precaching files==:", self.__precacheManifest)
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i, workbox.strategies.cacheFirst({
  cacheName: "app-cache",
  plugins: [new workbox.expiration.Plugin({
    "maxEntries": 5,
    "maxAgeSeconds": 600,
    "purgeOnQuotaError": false
  }), new workbox.cacheableResponse.Plugin({"statuses": [0, 200]})]
}), 'GET');
workbox.routing.registerRoute(new RegExp('http://172.20.183.62:3344/CAPI/*'), workbox.strategies.staleWhileRevalidate({
  cacheName: "app-cache",
  plugins: [new workbox.broadcastUpdate.Plugin('api-updates')
    , new workbox.cacheableResponse.Plugin({"statuses": [0, 200]})]
}), 'GET');

workbox.routing.registerRoute(/.*\.(?:js)/g, workbox.strategies.cacheFirst({
  cacheName: "app-cache",
  plugins: [new workbox.expiration.Plugin({
    "maxEntries": 5,
    "maxAgeSeconds": 36000,
    "purgeOnQuotaError": false
  }), new workbox.cacheableResponse.Plugin({"statuses": [0, 200]})]
}), 'GET');
workbox.routing.registerRoute(/.*\.(?:html)/g, workbox.strategies.networkFirst({
  cacheName: "app-cache",
  plugins: [new workbox.expiration.Plugin({
    "maxEntries": 5,
    "maxAgeSeconds": 86400,
    "purgeOnQuotaError": false
  }), new workbox.cacheableResponse.Plugin({"statuses": [0, 200]})]
}), 'GET');
workbox.routing.registerRoute(/.*\.(?:css)/g, workbox.strategies.cacheFirst({
  cacheName: "app-cache",
  plugins: [new workbox.expiration.Plugin({
    "maxEntries": 5,
    "maxAgeSeconds": 36000,
    "purgeOnQuotaError": false
  }), new workbox.cacheableResponse.Plugin({"statuses": [0, 200]}), new workbox.broadcastUpdate.Plugin("api-updates", {"headersToCheck": ["date"]})]
}), 'GET');