const path = require('path');
// TODO
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const chokidar = require('chokidar');

module.exports = {
  // 由 package script command line 設定
  // mode: 'development',
  context: path.resolve('src'),
  entry: './index.jsx', // 程式進入點
  // https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map', // sourcemap
  output: {
    filename: 'bundle.js', // 打包後的檔名
    publicPath: '/', //
    path: path.resolve('dist'), // 打包後的檔案路徑
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    alias: {
      '@': path.resolve('src'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: { // https://webpack.js.org/configuration/module/
    rules: [
      {
        test: /\.(js|jsx)$/, // 判斷副檔名 只要是js jsx就用loader
        use: {
          loader: 'babel-loader',
        },
        // 只找這個資料夾下的檔案，可以加速 webpack 打包
        include: [path.resolve('src')],
        // 排除文件，加速 webpack 打包
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            // https://github.com/webpack-contrib/html-loader
            loader: 'html-loader',
          },
        ],
        include: path.resolve('src/html'),
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: path.resolve('src/css'),
      },
      {
        test: /\.css$/,
        include: path.resolve('src/css'),
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048, // 小於 2048 bytes(2k) 的圖檔, 自動變成 base64 字串
            // 檔名： [資料夾][檔名].[副檔名]
            name: '[path][name].[ext]',
          },
        },
        include: path.resolve('src/img'),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      template: './src/styles.css',
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      template: './html/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    before(app, server) {
      // hot reload for html, pug
      chokidar.watch('src/html/**/*').on('all', () => {
        server.sockWrite(server.sockets, 'content-changed');
      });
    },
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // 可以用 ip 連線，預設是 localhost
    host: '0.0.0.0',
    stats: 'minimal',
  },
};
