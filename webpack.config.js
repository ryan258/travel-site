const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postcssPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer'),
];

let config = {
  // any same or shared config
  // between environments can be here
  entry: './app/assets/scripts/App.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader?url=false',
            options: {
              postcssOptions: {
                plugins: postcssPlugins,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)&/,
        loader: 'url-loader',
      },
    ],
  },
};

if (currentTask == 'dev') {
  // code specific to dev
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app'),
  };
  // devServer
  config.devServer = {
    before: function (app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0',
  };
  config.mode = 'development';
}

if (currentTask == 'build') {
  // code specific to build
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  };
  config.mode = 'production';
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all',
        },
      },
    },
  };
  config.plugins = [new CleanWebpackPlugin()];
}

let deleteMeLater = {};

module.exports = config;
