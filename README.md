
# Setting up Webpack
### WIP

Instructions to create and configure webpack to compile scss to css.

**Instructions**

Install webpack and webpack-cli
```console
npm install webpack webpack-cli --save-dev
```

Create webpack.config.js keep in mind the file structure
```console
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './public',
    port: 3000,
  },
  mode: 'development',
};
```

Install css compiler packages
```console
npm install sass-loader sass webpack --save-dev
```
```console
npm install --save-dev css-loader
```

todo add webpack config snippet of sass-loader and css-loader modules

adding npm install --save-dev mini-css-extract-plugin to make css files separate

adding css map js

```console
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Extract CSS to separate file
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // output CSS filename
    }),
  ],
  devServer: {
    static: './public',
    port: 3000,
  },
  mode: 'development',
};
```

# Notes

TerserPlugin is used to minify javascript

```console
npm install --save-dev terser-webpack-plugin
```