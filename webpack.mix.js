let mix = require('laravel-mix').mix;

mix.js('src/js/app.js', 'dist/js')
  .sass('src/scss/app.scss', 'dist/css');