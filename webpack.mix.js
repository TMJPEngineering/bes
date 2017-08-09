const { mix } = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.options({
    processCssUrls: false,
    publicPath: 'public'
});

mix.js('resources/assets/js/app.js', 'public/assets/js')
   .sass('resources/assets/sass/app.sass', 'public/assets/css')
