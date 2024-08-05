const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss|\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/, //it looks for the mjs and js file
        exclude: /node_modules/, //exclude the node
        use: {
          loader: "babel-loader", //we are using the babel loader
          options: {
            presets: ["@babel/preset-env"], //this is for 1.handles jsx and 2.convert es5,6,7 ... to es5
            plugins: ["@babel/plugin-transform-runtime"], //this handles async and await syntax
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
