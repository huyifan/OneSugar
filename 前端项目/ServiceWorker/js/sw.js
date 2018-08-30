/**
 * Created by hugo on 2018/8/29.
 */
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/css/index.css',
  '/js/index.js'
];

var dataUrl = new RegExp('\.s?json'); //异步实时更新的数据 规则


self.addEventListener('install', function (event) {
  //sw 更新之后立即 接管替换旧的 sw （无需 activate 事件）
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache ：', cache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {

  event.respondWith(
    caches.match(event.request).then(function (response) {
      // 来来来，代理可以搞一些代理的事情
      // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
      if (response) {
        console.log("server worker 返回了请求：", response)
        return response;
      }

      // 如果 service worker 没有返回，那就得直接请求真实远程服务
      var request = event.request.clone(); // 把原始请求拷过来

      console.log("server worker request：", request)

      return fetch(request).then(function (httpRes) {

        // http请求的返回已被抓到，可以处置了。
        // 请求失败了，直接返回失败的结果就好了。。
        if (!httpRes || httpRes.status !== 200) {
          console.log("httpRes error：", httpRes)
          return httpRes;
        }

        // 请求成功的话，将请求缓存起来。
        var responseClone = httpRes.clone();
        caches.open('my-test-cache-v1').then(function (cache) {
          console.log("httpRes cache：", cache)
          cache.put(event.request, responseClone);
        });

        return httpRes;
      });
    })
  )

  // if (dataUrl.test(FetchEvent.request.url))
  //   event.responseWith(
  //     caches.match(event.request).then(function (response) {
  //       // 来来来，代理可以搞一些代理的事情
  //       console.log("===response:", response)
  //       console.log("===request:", event.request)
  //       // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
  //       if (response) {
  //         console.log("server worker 返回了请求：", response)
  //         return response;
  //       }
  //
  //       // 如果 service worker 没有返回，那就得直接请求真实远程服务
  //       var request = event.request.clone(); // 把原始请求拷过来
  //       return fetch(request).then(function (httpRes) {
  //
  //         // http请求的返回已被抓到，可以处置了。
  //
  //         // 请求失败了，直接返回失败的结果就好了。。
  //         if (!httpRes || httpRes.status !== 200) {
  //           return httpRes;
  //         }
  //
  //         // 请求成功的话，将请求缓存起来。
  //         var responseClone = httpRes.clone();
  //         caches.open('my-test-cache-v1').then(function (cache) {
  //           cache.put(event.request, responseClone);
  //         });
  //
  //         return httpRes;
  //       });
  //     })
  //   )
  // else
  //   event.responseWith(
  //     caches.match(event.request).then(function (response) {
  //       // 来来来，代理可以搞一些代理的事情
  //       console.log("===response:", response)
  //       console.log("===request:", event.request)
  //       // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
  //       if (response) {
  //         console.log("server worker 返回了请求：", response)
  //         return response;
  //       }
  //
  //       // 如果 service worker 没有返回，那就得直接请求真实远程服务
  //       var request = event.request.clone(); // 把原始请求拷过来
  //       return fetch(request).then(function (httpRes) {
  //
  //         // http请求的返回已被抓到，可以处置了。
  //
  //         // 请求失败了，直接返回失败的结果就好了。。
  //         if (!httpRes || httpRes.status !== 200) {
  //           return httpRes;
  //         }
  //
  //         // 请求成功的话，将请求缓存起来。
  //         var responseClone = httpRes.clone();
  //         caches.open('my-test-cache-v1').then(function (cache) {
  //           cache.put(event.request, responseClone);
  //         });
  //
  //         return httpRes;
  //       });
  //     })
  //   )

});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    Promise.all([

      // 更新客户端

      self.clients.claim(),

      // 清理旧版本
      caches.keys().then(function (cacheList) {
        return Promise.all(
          cacheList.map(function (cacheName) {
            if (cacheName !== 'my-test-cache-v1') {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});