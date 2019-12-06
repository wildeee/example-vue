module.exports = {
  devServer: {
    overlay: true,
    open: true,
    proxy: {
      '^/api': {
        target: 'https://rest-banco-api.herokuapp.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
