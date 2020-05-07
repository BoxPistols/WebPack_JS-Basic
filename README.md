# WebPack Dev

## Set WebPack

https://webpack.js.org/

- if Windows
   - use nodist / node ver 10xx

$ yarn add -D webpack webpack-cli

### Create Path/file
- src\index.js

### Create ` webpack.config.js`

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```
## CSS to js

$ yarn add -D css-loader style-loader

## Sass

$ yarn add sass-loader node-sass

$ yarn add stylus-loader

---

$ yarn add -D webpack-dev-server

## Babel

$ yarn add -D babel-loader @babel/core
$ yarn add -D @babel/preset-env

### Create .babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

---

## CSS Separation

$ yarn add -D mini-css-extract-plugin

### update config

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

plugins: [new MiniCssExtractPlugin({
  filename: 'style.css',
})],
```

---

## Bootstrap install

$ yarn add -D bootstrap