// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
  }
});
