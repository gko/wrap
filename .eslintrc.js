module.exports = {
	extends: [
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
	],

	parser: "@typescript-eslint/parser",

	plugins: ["@typescript-eslint"],

	ignorePatterns: ["out", "node_modules/"],

	settings: {
		"import/resolver": {
			node: {
				extensions: [".ts"]
			}
		}
	},

	env: {
		jest: true,
		es6: true
	}
};