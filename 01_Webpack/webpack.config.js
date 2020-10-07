module.exports = {
  entry: './main.coffee',
  output: {
    path: 'bundle',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        exclude: /(node_modules)/,
        loader: 'coffee',
      },
    ],
  },
};
