const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");
const Router = require('koa-router');

const router = new Router();

module.exports = merge(common, {
  // Provides process.env.NODE_ENV with value development.
  // Enables NamedChunksPlugin and NamedModulesPlugin.
  mode: "development",
  devtool: "inline-source-map",
  // configure `webpack-serve` options here
  serve: {
    add: (app, middleware, options) => {
        // since we're manipulating the order of middleware added, we need to handle
        // adding these two internal middleware functions.
        middleware.webpack();
        middleware.content();
      
        // router *must* be the last middleware added
        app.use(router.routes());
      },
    // The path, or array of paths, from which static content will be served.
    // Default: process.cwd()
    content: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});