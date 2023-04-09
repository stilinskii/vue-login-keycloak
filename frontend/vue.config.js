const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  //for CORS
  //api로 시작하는 주소가 있으면 타겟주소로 프록시를 통해서 우회해서 요청해줘
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
