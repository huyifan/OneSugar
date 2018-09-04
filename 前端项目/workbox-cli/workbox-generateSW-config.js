module.exports = {
  "globDirectory": "src/",
  "globIgnores": ["**/css2/**",'**/dist/**'],
  "globPatterns": [
    "**/*.{css,html,png,jpg,js,eot,svg,ttf,woff,woff2,yml,json,md,rb,pug,swf,ico,txt,lock,less,nuspec,ps1,chm}"
  ],
  "swDest": "src\\dist\\sw-gen.js",
};