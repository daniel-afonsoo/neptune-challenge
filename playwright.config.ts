import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',

  timeout: 30 * 1000,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  projects: [
    // Setup
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: {
        baseURL: 'http://localhost:8080',
        browserName: 'chromium',
      
        launchOptions: {
          slowMo: 200,
        },
      },
    },

    //Principal
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: {
        baseURL: 'http://localhost:8080',
        storageState: 'playwright/.auth/state.json',

        browserName: 'chromium',
  
      
        launchOptions: {
          slowMo: 200,
        },

        
        screenshot: 'on',
        video: 'on',
        trace: 'on',
      },
    },
  ],
});
