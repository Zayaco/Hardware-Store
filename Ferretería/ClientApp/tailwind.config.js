module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
