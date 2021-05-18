module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/node",
		"plugin:evelyn/source",
	],

	"ignorePatterns": [
		"lib",
		"coverage",
	],

	"overrides": [
		{
			"files": [
				"**/*.ts",
			],
			"extends": [
				"plugin:evelyn/typescript",
			],
			"rules": {
				"unicorn/no-array-callback-reference": "warn",
			},
		},
		{
			"files": [
				"./*.js",
			],
			"rules": {
				"unicorn/prefer-module": "off",
			},
		},
	],
};
