const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "https://sonarqube.ct.blue.cdtapps.com",
    token: "ada045feefa7978777074d1326b8ade8aee9fa7c",
    options: {
     "sonar.projectKey": "cweb.cweb-pilot-test",
      "sonar.projectName": "cweb-pilot-test",
      "sonar.sources": "./lib",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/test-report.xml",
    },
  },
  () => {},
  );
