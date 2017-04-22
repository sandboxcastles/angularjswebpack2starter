var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'content/scripts/app.bundle.js'
    },
    module: {
        rules: [
            {
                // Takes any scss files found and compiles them to css
                test:/\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader', 'sass-loader'],
                publicPath: '/dist'
                })
            },
            {
                // Used to enable requiring html template files in AngularJS components and directives
                test: /\.html$/,
                use: ['raw-loader'],
                exclude: [/node_modules/]
            },
            {
                // Transpiles ES2015 code to ES5 code
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9001,
        open: true,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Made with Webpack and AngularJS',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin({
            filename: 'content/styles/app.bundle.css',
            disable: false,
            allChunks: true
        }),
        new CopyWebpackPlugin([
            { from:'node_modules/angular/angular.js', to: 'content/lib/angular' }
        ])
    ]
};

module.exports = webpackConfig;