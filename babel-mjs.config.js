module.exports = {
	"extends": "./babel.config.js",
	"plugins": [
		[
			"babel-plugin-add-import-extension",
			{
				extension: "mjs",
			},
		],
	],
	"presets": [
		[
			"@babel/preset-env",
			{
				"targets": {
					"esmodules": true,
				},
				"modules": false,
			},
		],
	],
};
