/// purge css / tailwind css / vue
/// https://medium.com/@FlorianWoelki/vue-3-and-tailwindcss-2041fea3bcd2

/// postcss-loader
/// https://github.com/webpack-contrib/postcss-loader

// import autoprefixer from 'autoprefixer';
// import tailwindcss from 'tailwindcss';



// const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: {
    tailwindcss: 'tailwind.config.js',
    autoprefixer: {},
  }
};
