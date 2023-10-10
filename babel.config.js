module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        // root: ['./'],
        // root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        // alias: {
        //   '@src/assets': './src/assets',
        //   '@src/components': './src/components',
        //   '@src/hooks': './src/hooks',
        //   '@src/navigation': './src/navigation',
        //   '@src/redux': './src/redux',
        //   '@src/screens': './src/screens',
        //   '@src/services': './src/services',
        //   '@src/theme': './src/theme',
        //   '@src/types': './src/types',
        //   '@src/utils': './src/utils',
        //   '@src': './src',
        // },
        alias: {
          // This has to be mirrored in tsconfig.json
          '^@src/(.+)': './src/\\1',
        },
      },
    ],
  ],
};
