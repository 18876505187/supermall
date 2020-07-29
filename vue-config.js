module.exports = {
  configureWebpack : {
    resolve: {
      alias: {
        //配置别名
        'assets': 'src/assets',
        'common': 'src/common',
        'components': 'src/components',
        'network': 'src/network',
      }
    }
  }
}
