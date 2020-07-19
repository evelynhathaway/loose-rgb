module.exports = {
	"plugins": [
		"@babel/plugin-proposal-export-namespace-from",
	],
	"presets": [
		"@babel/preset-typescript",
		[
			"@babel/preset-env",
			{
				"targets": {
					"browsers": [
						"node >= 6.0.0",
					],
				},
				"modules": "commonjs",
			},
		],
	],
	"minified": true,
	"comments": false,
	"ignore": [
		"**/__tests__/*",
	],
};
