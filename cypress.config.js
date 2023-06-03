const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
  responseTimeout: 3000,
  reporter: "mocha-allure-reporter",
  component: {
    viewportHeight: 660,
    viewportWidth: 1000,
  },

  e2e: {
    setupNodeEvents(on, config) {
       //implement node event listeners here
    },
    specPattern: "cypress/e2e/*.spec.js",
  },
  
});
