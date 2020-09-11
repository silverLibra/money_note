const path = require('path')
module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@containers': path.resolve('src/containers'),
      '@firebaseUtils': path.resolve('src/firebaseUtils'),
      '@store': path.resolve('src/store'),
      '@components': path.resolve('src/components'),
      // '@styles': path.resolve('src/styles'),
      // '@assets': path.resolve('src/assets'),

      // '@utils': path.resolve('src/utils'),
      // '@apis': path.resolve('src/apis'),
      // '@parser': path.resolve('src/parser'),
      // '@config': path.resolve('src/config'),
      // '@hooks': path.resolve('src/hooks'),
    }
  }
}