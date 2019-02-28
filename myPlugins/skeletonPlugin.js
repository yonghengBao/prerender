/**
 * Created by Administrator on 2018/12/18.
 */
//骨架屏插件
let SkeletonPlugin = function (options) {}
SkeletonPlugin.prototype.apply = function (compiler) {
  compiler.plugin("compilation",compilation => {
    //还可以自己对文件进行操作

    //别人编译的入口
    compilation.plugin('html-webpack-plugin-before-html-processing',(htmlData,callback) =>{
      htmlData.html = htmlData.html.replace(`<div id="app"></div>`,`
        <div id="app">
          <img style="width: 100%;height: 100%;" src="../static/img/gujia.png" alt="">
          <script>
            console.log("可以通过地址判断操作DOM，不同url显示不同骨架屏")
          </script>
        </div>
      `)
      callback(null,htmlData);
    })
  })
}
module.exports = SkeletonPlugin;




