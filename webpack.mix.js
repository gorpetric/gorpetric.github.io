let mix = require('laravel-mix');

mix.setPublicPath('public')
    .js('js/app.js', 'public/js')
    .sass('css/app.scss', 'public/css')
    .browserSync('gp.dev');

mix.disableNotifications();
