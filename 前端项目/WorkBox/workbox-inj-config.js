module.exports = {
  swDest: 'sw-inj.js',
  swSrc: 'sw.js',
  globDirectory: "src/dist",
  globPatterns: [
    "**/*.{html,ico,svg,png,js,css}"
  ],
  globIgnores: ['bundle.js'], // 忽略的文件
};