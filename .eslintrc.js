module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
	},
  extends: 'airbnb-base',
	settings: {
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
        'alias': {
          '@': './src',
          '~': './'
        },
			}
		}
	},
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
		'no-use-before-define': ['error', { 'functions': false }],
		'prefer-template': 'off',
		'padded-blocks': 'off',
		'consistent-return': 'off',
		'no-shadow': 'off',
		'prefer-arrow-callback': 'off',
		'func-names': 'off',
		'radix': 'off',
		'no-plusplus': 'off',
		'no-unused-vars': 'off',
		'no-return-await': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'js': 'never',
			}
		],
  }
};
