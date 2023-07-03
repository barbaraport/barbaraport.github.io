// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('cypress').defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
