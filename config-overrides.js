const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve('src/components'),
    '@containers': path.resolve('src/containers'),
    '@store': path.resolve('src/store'),
    '@firebaseUtils': path.resolve('src/firebaseUtils'),
    //
    // '@component': path.resolve('src/component'),
    // '@styles': path.resolve('src/styles'),
    // '@assets': path.resolve('src/assets'),

    // '@utils': path.resolve('src/utils'),
    // '@apis': path.resolve('src/apis'),
    // '@parser': path.resolve('src/parser'),
    // '@config': path.resolve('src/config'),
    // '@hooks': path.resolve('src/hooks'),
  }),
)