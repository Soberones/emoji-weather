// module.exports = (api) => {
//   api.cache(true);

//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     plugins: [
//       [
//         'babel-plugin-root-import',
//         {
//           rootPathPrefix: '~',
//           rootPathSuffix: 'src',
//         },
//       ],
//     ],
//   };
// };
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
        ],
      ],
    },
  },
};
