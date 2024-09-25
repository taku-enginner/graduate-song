const path = require('path');

module.exports = {
  mode: 'development', // 'production'に変更すると最適化されます
  entry: './app/javascript/packs/application.js', // エントリーポイントを指定
  output: {
    filename: 'bundle.js', // 出力ファイル名
    path: path.resolve(__dirname, 'public/assets'), // 出力先
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'], // 拡張子の解決
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babelを使用してJSをトランスパイル
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // CSSを扱うためのローダー
      },
    ],
  },
  devtool: 'source-map', // ソースマップの生成
};
