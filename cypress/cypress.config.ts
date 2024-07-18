import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    "grepFilterSpecs": true,
    "grepOmitFiltered": true
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://play1.automationcamp.ir",
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
