var path = require('path');
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    polyfills: './src/ie/polyfills.js', //IE Specific config for ES6 features: using polyfills and whatwg-fetch
    "medal-widget": './src/index.js',
  },
  output: {
    library: ["widget"],
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "dist"),
    publicPath: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    chunkFilename: '[id].[hash:8].js'
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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: "/fonts"
            }
          }],
      },
      {
        test: /\.(jpeg|jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: "/images"
            }
          }],
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env.example', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    }),
    new webpack.DefinePlugin({
      self: 'global',
    }),
  ]
};


// module.exports = (env, argv) => {
//   // Env Specific webpack config  
//   if (argv.mode === 'development') {
//     config.output.filename = '[name].bundle.js'
//   }

//   if (argv.mode === 'production') {
//     config.output.filename = '[name].bundle.min.js'
//   }

//   return config
// };
