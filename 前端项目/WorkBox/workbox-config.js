module.exports = {
  globDirectory: './dist/',
  swSrc: './sw1.js',
  swDest: './dist/sw.js',
  globPatterns: [
    "**/*.{html,ico,svg,png,js,css}"
  ],
  clientsClaim: true,
  skipWaiting: true, //开发阶段使用，生产上为false.因为sw是共享worker,如果设置立即激活可能会导致不一致性。只有当完全没有client控制的时候，再次控制时才激活。
  runtimeCaching: [
    {
      urlPattern:/.*\.(?:html)/g,
      handler: 'staleWhileRevalidate',
      options: {
        cacheName: 'app-cache',
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 60*60*24,
          purgeOnQuotaError: true //当缓存达到最大容量时可设置purgeOnQuotaError: true,自动清除缓存； workbox v3.3.0
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern:  /.*\.(?:css)/g,
      handler: 'cacheFirst',//策略级别的缓存命名
      options: {
        // Fall back to the cache after 10 seconds.
        // networkTimeoutSeconds: 10,
        // Use a custom cache name for this route.
        cacheName: 'app-cache',
        // Configure custom cache expiration.
        expiration: {
          maxEntries: 1,
          maxAgeSeconds: 10,
          purgeOnQuotaError: true
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
    }]

};