module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, //it looks for the mjs and js file
        exclude: /node_modules/, //exclude the node
        use: {
          loader: "babel-loader", //we are using the babel loader
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], //this is for 1.handles jsx and 2.convert es5,6,7 ... to es5
            plugins: ["@babel/plugin-transform-runtime"], //this handles async and await syntax
          },
        },
      },
    ],
  },
};
