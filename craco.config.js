/**
 * Modify the webpack configuration to add aliases from tsconfig
 **/
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    },
  },
};
