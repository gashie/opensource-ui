const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1/**", {
      target: `http://127.0.0.1:${process.env.NODE_ENV === 'production' ? '9000' : '9000'}`,
      secure: "false", 
      changeOrigin: true, 
    })
  );
};


