module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./GoOfficeSpace'],
        extensions: [
          '.js',
          '.jsx',
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@components': './GoOfficeSpace/components',
          '@screens': './GoOfficeSpace/screens',
          '@navigators': './GoOfficeSpace/navigators',
          '@assets': './GoOfficeSpace/assets',
          '@utils': './GoOfficeSpace/utils',
        },
      },
    ],
  ],
};
