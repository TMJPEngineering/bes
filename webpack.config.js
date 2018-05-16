const ENV = process.env.APP_ENV || 'development';
const isDevelopment = (ENV === 'development');

// Modules
const webpack = require('webpack');
const path = require('path');

// Plugins
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassPath = './resources/assets/sass';
const jsPath = './resources/assets/js';
const outputPath = 'public/dist';

module.exports = {
    entry: {
        vendor: ['bootstrap'],
        app: [
            jsPath + '/app.js',
            sassPath + '/app.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, outputPath),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".js", ".json"]
    },
    devtool: isDevelopment ? 'inline-source-map' : false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1024&publicPath=../&name=../fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            alias: {
                                '../fonts': 'font-awesome/fonts/'
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [
                                path.resolve('./node_modules/bootstrap/scss'),
                                path.resolve('./node_modules/font-awesome/scss')
                            ]
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.js$/,
            options: {
                babel: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        }),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: 'exports-loader?Util!bootstrap/js/dist/util',
            Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
        })

    ]
};
