const path = require('path');
const webpack = require('webpack');
const postcssPlugins = require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
postcssPlugins.postcss = false
module.exports = {
  plugins: [
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
        }
        return id;
      }
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5'
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
    postcssPlugins
  ]
};

if (webpack.version[0] > 4) {
  module.exports.plugins.push(require('postcss-comment'));
}
