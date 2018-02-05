const ENV = process.env.NODE_ENV || 'development';
const isDevelopment = (ENV === 'development');

// Modules
const webpack = require('webpack');
const path = require('path');

// Plugins
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: [
        './resources/assets/js/app.js', './resources/assets/sass/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ["*", ".js", ".json"],
        modules: /node_modules/
    },
    devtool: isDevelopment ? 'inline-source-map' : false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
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
