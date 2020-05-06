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