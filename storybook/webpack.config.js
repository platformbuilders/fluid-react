// @flow

module.exports = {
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      }
    ],
  },
  resolve: {
    alias: {
    'react-native': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.ts', '.tsx'],
  },
};
