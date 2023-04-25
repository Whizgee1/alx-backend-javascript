module.exports = {
	env: {
	  browser: false,
	  es6: true,
	  jest: true,
	},
	extends: [
	  'airbnb-base',
	  'plugin:jest/all',
	],
	globals: {
	  Atomics: 'readonly',
	  SharedArrayBuffer: 'readonly',
	},
	parserOptions: {

