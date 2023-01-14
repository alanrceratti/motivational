const path = require("path");

module.exports = {
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
},
],
},
	resolve: {
		modules: [
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "node_modules/tailwindcss"),
			"node_modules", // this is the default
		],
	},
};
