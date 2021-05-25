module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/typescript",
	],

	"ignorePatterns": [
		"lib",
		"coverage",
	],

	"rules": {
		"unicorn/prevent-abbreviations": "off",
	},
};
