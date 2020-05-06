# WebPack Dev

- if Windows
   - use nodist / node ver 10xx

$ yarn add -D webpack webpack-cli

- Create ` webpack.config.js`

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
