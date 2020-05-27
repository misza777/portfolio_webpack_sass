const path = require("path");
const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    app: "./app/js/app.js",
  },

  // mode: development,
  mode: env,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "./",
  },

  devServer: {
    open: true,
    publicPath: "/",
    contentBase: path.resolve(__dirname, "/"),
    compress: true,
    port: 3500,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage", corejs: "2.0.0" }],
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // {
      // test: /\.(jpg|png|svg|gif|jpeg)$/,
      // use: "file-loader",
      // loader: "file?name=[name].[ext]",
      // options: {
      // name: "[name].[ext]",
      // outputPath: 'images',
      // publicPath: '../images'
      // },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     env === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "postcss-loader",
      //     "sass-loader",
      //   ],
      // },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: "file-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: "index.html",
      title: "Mishiko portfolio",
      favicon: "./app/images/favicon-32x32.png",
    }),
    new HtmlWebpackPlugin({
      template: "./app/about.html",
      filename: "about.html",
      favicon: "./app/images/favicon-32x32.png",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      template: "./app/work.html",
      filename: "work.html",
      favicon: "./app/images/favicon-32x32.png",
      chunks: ["app"],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new copyPlugin([
      {
        from: "app/images",
        to: "images",
      },
    ]),
  ],
};
