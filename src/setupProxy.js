// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://smam4ykassets.netlify.app/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
