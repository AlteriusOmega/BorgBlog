const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function override(config, env) {
  config.devServer = {
    ...config.devServer,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    setup(app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:8000',
          changeOrigin: true,
        })
      );
    },
  };
  return config;
};