module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },
    // module: [{
    //   test: /\.less$|\.stylus/,
    //   use: [{
    //     loader: "less-loader"
    //   }, {
    //     loader: "stylus-loader"
    //   }]
    // }]
  }
}