var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: ["widget"],
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "dist"),
    filename: "medal-widget.js",
    publicPath:path.resolve(__dirname, "public/assets")
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: "fonts"
          }
      }],
      }
    ]
  },
  // plugins: [htmlWebpackPlugin]
};