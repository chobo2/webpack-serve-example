const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  serve: {
    open: true,
    open: { app: 'Chrome', path: '/' }, // this does not open
    mode: 'development', // how to dwitch between dev and prodction?
    port: 8080,
    hot: {
      hot: true
    },
    add: (app, middleware, options) => {
      middleware.webpack();
      middleware.content();
      app.use(router.routes()); // guess got to add more to this to get it to work
    }
  },
};

// module.exports.serve = {
//   add: (app, middleware, options) => { // eslint-disable-line no-unused-vars
//     app.use((ctx, next) => {
//       ctx.set('X-Custom-Middleware', 'owns');
//       return next();
//     });
//
//     // middleware.webpack();
//     // middleware.content();
//   },
//   content: [__dirname],
//   dev: {
//     headers: { 'X-Foo': 'Kachow' }
//   },
//   hot: {
//     logLevel: 'info',
//     logTime: true
//   }
//   // open: true
//   // open: { app: 'Firefox', path: '/foo' }
// };
