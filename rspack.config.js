const path = require('path')

module.exports = {
  entry: {
    background: path.resolve(__dirname, 'src/background/index.ts'),
    content: path.resolve(__dirname, 'src/content/index.tsx'),
    devtools: path.resolve(__dirname, 'src/devtools/index.ts'),
    ['devtools-panel']: path.resolve(__dirname, 'src/devtools/panel/index.tsx'),
    newtab: path.resolve(__dirname, 'src/newtab/index.tsx'),
    options: path.resolve(__dirname, 'src/options/index.tsx'),
    popup: path.resolve(__dirname, 'src/popup/index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  builtins: {
    html: [
      {
        chunks: ['devtools'],
        filename: 'devtools.html',
        minify: true,
        template: './src/index.html',
      },
      {
        chunks: ['newtab'],
        filename: 'newtab.html',
        minify: true,
        template: './src/index.html',
      },
      {
        chunks: ['options'],
        filename: 'options.html',
        minify: true,
        template: './src/index.html',
      },
      {
        chunks: ['popup'],
        filename: 'popup.html',
        minify: true,
        template: './src/index.html',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-loader',
          },
        ],
        type: 'css/module',
      },
    ],
  },
}
