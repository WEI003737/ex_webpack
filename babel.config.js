module.exports = {
  presets: [
    [
      '@babel/preset-env', //there are two ways to configure babel: .babelrc and babel.config.js (https://babeljs.io/docs/en/config-files#apicache)
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
};