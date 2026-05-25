import fs from 'fs';
export const config = {
    onPrepare: function () {
        //cleanAllureResults();
    },
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu']
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', ['allure', 
    {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
      useCucumberStepReporter: true,
    }],
  ],
    cucumberOpts: {
        require: ['./features/step-definitions/steps.js',
            './features/support/hooks.js'
        ],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
}
function cleanAllureResults() {
        const allureResultsPath = './allure-results';
        
        if (fs.existsSync(allureResultsPath)) {
            fs.rmSync(allureResultsPath, { recursive: true, force: true });
            console.log('Cleaned allure-results folder');
        }
        fs.mkdirSync(allureResultsPath, { recursive: true });
}