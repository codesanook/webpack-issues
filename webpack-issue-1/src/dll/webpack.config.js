const webpack = require("webpack");
const path = require("path");
const resolve = path.resolve;
const outputPath = resolve('../../dist');

module.exports = {
  entry: {
    'vendor': './src/index',
  },
  mode: 'development',
  output: {
    path: outputPath,
    filename: '[name].js',
    library: '[name]',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(outputPath, "[name]-manifest.json"),
      name: "[name]"
    })
  ],
};
