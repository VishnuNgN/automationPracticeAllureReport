// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests', //test directories in which from tests are taken for run
  retries : 1, // retry the testing
  timeout : 40000,
  expect :{
    timeout : 40000,
  },

use: {
    browserName : 'chromium', // to open the browser 
    headless : true,
     trace: 'on-first-retry',
     reporter : 'html'
  },
});


module.exports = config
