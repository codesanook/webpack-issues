// This webpack is only for build Sass to CSS
const webpack = require("webpack");
const path = require("path");
const resolve = path.resolve;
const outputPath = resolve('../../dist');

module.exports = {
  entry: {
    'app': './src/index',
  },
  mode: 'development',
  output: {
    path: outputPath,
    filename: '[name].js',
    library: '[name]'
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
    // new webpack.DllReferencePlugin({
    //   manifest: path.join(outputPath, "./vendor-manifest.json"),
    // }),
  ],
};
