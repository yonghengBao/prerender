# prerender

> A Vue.js project

## Build Setup

``` bash
# install dependencies
第一步，下载项目需要的依赖：npm install
第二步，下载prerender-spa-plugin插件：npm install prerender-spa-plugin
(说明：
  1:prerender-spa-plugin插件直接放在package.json文件中与项目本身依赖一起下载可能报错
  2:项目打包后放在Nginx服务器上，因使用vue中使用的是history模式，因此需要对Nginx服务器做配置，具体参考https://blog.csdn.net/sinat_36263705/article/details/81479445
  3:查看骨架屏效果需要把webpack.prod.conf.js文件中使用预渲染插件注释：
  new PrerenderSpaPlugin({
   //编译后html需要存放的路径
   staticDir: path.join(__dirname, '../dist'),
   // 列出需要预渲染的路由
   routes: ['/', '/login']
   }),
  )

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
