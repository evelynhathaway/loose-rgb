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
	],
	"overrides": [
		{
			"files": [
				"**/*.ts",
			],
			"extends": [
				"plugin:evelyn/typescript",
			],
		},
	],
};
