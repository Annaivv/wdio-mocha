export const config = {
  runner: "local",
  specs: ["./../tests/specs/**/*.spec.js"],

  exclude: [],
  maxInstances: 3,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "https://practicesoftwaretesting.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["visual"],
  framework: "mocha",
  reporters: [
    [
      "spec",
      {
        addConsoleLogs: true,
      },
    ],
    [
      "html",
      {
        outputDir: "./reports/html-reports/",
        filename: "report.html",
        reportTitle: "Test Execution Report",
        useOnBeforeCommandForScreenshot: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
