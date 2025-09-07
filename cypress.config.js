const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

