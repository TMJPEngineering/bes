const ENV = process.env.NODE_ENV || 'development';
const isDevelopment = (ENV === 'development');
// Modules
const webpack = require('webpack');
const path = require('path');

// Plugins
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSass = new ExtractTextPlugin({
    filename: '[name]/[name].css',
    disable: (ENV === 'test'),
    allChunks: true
});

module.exports = {
    entry: {
        vendor: ['./resources/assets/js/app.js', './resources/assets/sass/app.scss']
    },
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: '[name]/[name].js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions. extensions: ["*",".ts",".js", ".json",".vue"]
        extensions: ["*", ".ts", ".js", ".json", ".vue"]
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
                test: /\.vue$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'vue-loader'
            },
            // {
            //     test: /\.js$/,
            //     exclude: path.resolve(__dirname, 'node_modules'),
            //     loader: 'eslint-loader'
            // },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1024&publicPath=../&name=vendor/fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ExtractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                alias: {
                                    '../fonts/bootstrap': 'bootstrap-sass/assets/fonts/bootstrap',
                                    '../fonts': 'font-awesome/fonts/'
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    path.resolve('./node_modules/bootstrap/scss'),
                                    path.resolve('./node_modules/font-awesome/scss'),
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        ExtractSass,
        new webpack.LoaderOptionsPlugin({
            test: /\.js$/,
            options: {
                babel: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        }),
        new WebpackNotifierPlugin({ skipFirstNotification: true, alwaysNotify: true }),
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
