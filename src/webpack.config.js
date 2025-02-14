const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimize: false,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
