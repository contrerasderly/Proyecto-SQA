const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1400,
    viewportHeight: 850,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      file: "cypress.env.json",
    },
  },
});
