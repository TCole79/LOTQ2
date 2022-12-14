module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')("./tailwind.config.js"),
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'nesting-rules': true
      }
    })
  ]
}
