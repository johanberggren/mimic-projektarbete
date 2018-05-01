$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/print_3/group_project/Sprint3.feature");
formatter.feature({
  "line": 3,
  "name": "Testing Sprint 3 Mimic",
  "description": "",
  "id": "testing-sprint-3-mimic",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Test mimic through Http call",
  "description": "",
  "id": "testing-sprint-3-mimic;test-mimic-through-http-call",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have defined a response \"Rory\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have defined its request as \"my dads name\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I want mimic to unlearn the response",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the response has been forgotten",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rory",
      "offset": 27
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_a_response(String)"
});
formatter.result({
  "duration": 555143478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my dads name",
      "offset": 31
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_its_request_as(String)"
});
formatter.result({
  "duration": 5148408,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_want_mimic_to_unlearn_the_response()"
});
formatter.result({
  "duration": 7021281,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.the_response_has_been_forgotten()"
});
formatter.result({
  "duration": 11422478,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test mimic through Browser",
  "description": "",
  "id": "testing-sprint-3-mimic;test-mimic-through-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I have defined a Request \"my brothers name\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I have defined a Response \"Jimmy\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I ask mimic to unlearn previous response/request",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The response/Request has been forgotten",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "my brothers name",
      "offset": 26
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_a_Request(String)"
});
formatter.result({
  "duration": 9676137047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jimmy",
      "offset": 27
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_a_Response(String)"
});
formatter.result({
  "duration": 485634558,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-VG17NKN\u0027, ip: \u002710.3.113.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\johan\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: 24a04e77f357ec30258197ecd42a5d85\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat print_3.group_project.SeleniumMethods.LearnNewResponse(SeleniumMethods.java:34)\r\n\tat print_3.group_project.Sprint3StepDefs.i_have_defined_a_Response(Sprint3StepDefs.java:76)\r\n\tat ✽.And I have defined a Response \"Jimmy\"(src/main/java/print_3/group_project/Sprint3.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_ask_mimic_to_unlearn_previous_response_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Sprint3StepDefs.the_response_Request_has_been_forgotten()"
});
formatter.result({
  "status": "skipped"
});
});