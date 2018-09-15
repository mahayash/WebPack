const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new htmlWebpackPlugin({
      title: "WebPack Demo"
    })
  ],
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true
  }
};
