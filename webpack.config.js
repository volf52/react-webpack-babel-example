const path = require("path")

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: './src',
		publicPath: '/output'
	},
	module: {
		rules: [
			{
				test: /\.jsx/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['react', 'es2015'] }
				}
			},
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};
