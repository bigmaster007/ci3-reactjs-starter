let mix = require("laravel-mix");

mix.react("./src/app.js", "./dist/").sass("./src/app.scss", "./dist/");

mix.setResourceRoot("../");
