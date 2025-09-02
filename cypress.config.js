const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     env:{
      username: 'admin@example.com',
      password : 'qwerty',
    },
    baseUrl:'https://safdarjamal.github.io/crud-app/',
    testIsolation: false,
  },
});
