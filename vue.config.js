const {
  defineConfig
} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: { //代理
      '/api': { //代表后台接口的别名
        target: 'http://127.0.0.1:2000/', //访问的后台接口
        changeOrigin: true,//允许跨域
        pathRewrite: { //重写路径
          '/api': ''
        }
      }
    }
  }
});
