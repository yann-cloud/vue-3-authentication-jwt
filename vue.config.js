module.exports = {
  devServer: {
    port: 8081
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.isServerBuild = false;
        return options;
      });
  }
}