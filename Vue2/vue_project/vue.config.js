const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查

  // 开启代理服务器(方式一)
  /* 这种方式的缺点就是如果本地（public文件夹）有同名的文件则不会发送请求获取数据，而是直接获取本地同名的文件 */
  // devServer: {
  //   proxy:'http://localhost:5000'
  // },
  
  //开启代理服务器（方式二）
	devServer: {
    proxy: {
      // 路径前缀，这个前缀是加在端口号之后的路径的前面
      '/hello': { // 匹配所有以 '/hello'开头的请求路径
        target: 'http://localhost:5000',
				pathRewrite:{'^/hello':''}, // 路径重写，将路径中匹配到的内容替换成指定内容，这里将前缀去掉了，因为访问的服务器没有这个路径，代理服务器发送请求时要将这个前缀去掉
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值（主机名:端口），设置true后代理服务器的host值就和请求的服务器的主机名一样，设置为false就是本机的主机名
      },
      '/demo': { // 匹配所有以 '/demo'开头的请求路径
        target: 'http://localhost:5001',
				pathRewrite:{'^/demo':''},
        ws: true,
        changeOrigin: true 
      }
    }
  }

})
