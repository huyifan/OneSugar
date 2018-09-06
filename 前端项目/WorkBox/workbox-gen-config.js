module.exports = {
  swDest: 'sw-gen.js',
  globDirectory: "src/dist",
  globPatterns: [
    "**/*.{html,ico,svg,png,js,css}"
  ],
  globIgnores: ['service-worker'], // 忽略的文件
  clientsClaim: true,// Service Worker 被激活后使其立即获得页面控制权
  skipWaiting: true, //开发阶段使用，生产上为false.因为sw是共享worker,如果设置立即激活可能会导致不一致性。只有当完全没有client控制的时候，再次控制时才激活。
  runtimeCaching: [
    {//缓存字体
      urlPattern: new RegExp('http://cdn.bootcss.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2'),
      handler: 'cacheFirst',
      options: {
        cacheName: 'app-cache',
        broadcastUpdate: {//缓存更新通知
          channelName: 'api-updates',
          options: {
            headersToCheck: ['date']
          }
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {//缓存图片
      urlPattern: new RegExp('.*js'),
      handler: 'cacheFirst',
      options: {
        cacheName: 'app-cache',
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 60 * 10,
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {//缓存图片
      urlPattern: /\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i,
      handler: 'cacheFirst',
      options: {
        cacheName: 'app-cache',
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 60 * 10,
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /.*\.(?:capi)/g,
      handler: 'networkFirst',//策略级别的缓存命名
      options: {
        // Fall back to the cache after 10 seconds.
        // networkTimeoutSeconds: 10,
        // Use a custom cache name for this route.
        cacheName: 'app-cache',
        // Configure custom cache expiration.
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 10 * 60 * 60,
        },
        // Configure which responses are considered cacheable.
        cacheableResponse: {
          statuses: [0, 200]
        },
      }

    },
    {
      urlPattern: /.*\.(?:js)/g,
      handler: 'cacheFirst',//策略级别的缓存命名
      options: {
        // Fall back to the cache after 10 seconds.
        // networkTimeoutSeconds: 10,
        // Use a custom cache name for this route.
        cacheName: 'app-cache',
        // Configure custom cache expiration.
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 10 * 60 * 60,
        },
        // Configure which responses are considered cacheable.
        cacheableResponse: {
          statuses: [0, 200]
        },
      }

    },
    {
      urlPattern: /.*\.(?:html)/g,
      handler: 'networkFirst',
      options: {
        cacheName: 'app-cache',
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 60 * 60 * 24,
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /.*\.(?:css)/g,
      handler: 'cacheFirst',//策略级别的缓存命名
      options: {
        // Fall back to the cache after 10 seconds.
        // networkTimeoutSeconds: 10,
        // Use a custom cache name for this route.
        cacheName: 'app-cache',
        // Configure custom cache expiration.
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 10 * 60 * 60,
        },
        // Configure which responses are considered cacheable.
        cacheableResponse: {
          statuses: [0, 200]
        },
        // Configure the broadcast cache update plugin.
        broadcastUpdate: {
          channelName: 'api-updates',
          options: {
            headersToCheck: ['date']
          }
        },
        // Add in any additional plugin logic you need.
      }
    }
    ]


};