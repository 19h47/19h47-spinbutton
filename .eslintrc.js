const plugins = [];

module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: ['airbnb-base', 'prettier'],
	rules: {
		'no-console': 'off',
		'no-debugger': 'production' === process.env.NODE_ENV ? 'error' : 'off',
		'no-tabs': 0,
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'],
			},
		],
		yoda: [2, 'always'],
		'import/no-named-as-default': 0,
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: 'webpack/webpack.config.common.js',
			},
		},
	},
	plugins,
};
