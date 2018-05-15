$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Sprint_5/SprintFive/Sprint5.feature");
formatter.feature({
  "line": 3,
  "name": "Sprint Five Mimic",
  "description": "",
  "id": "sprint-five-mimic",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Viewing Previously defined Responses",
  "description": "",
  "id": "sprint-five-mimic;viewing-previously-defined-responses",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have defined a request \u003cRequest\u003e and a response \u003cResponseOne\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have added a second response \u003cResponseTwo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I have added a third response \u003cResponseThree\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I have added a fourth response \u003cResponseFour\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I want to view all the responses I have added",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I can check them from the beginning",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sprint-five-mimic;viewing-previously-defined-responses;",
  "rows": [
    {
      "cells": [
        "Request",
        "ResponseOne",
        "ResponseTwo",
        "ResponseThree",
        "ResponseFour"
      ],
      "line": 18,
      "id": "sprint-five-mimic;viewing-previously-defined-responses;;1"
    },
    {
      "cells": [
        "\"My Mothers age\"",
        "\"51\"",
        "\"52\"",
        "\"53\"",
        "\"54\""
      ],
      "line": 19,
      "id": "sprint-five-mimic;viewing-previously-defined-responses;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Viewing Previously defined Responses",
  "description": "",
  "id": "sprint-five-mimic;viewing-previously-defined-responses;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have defined a request \"My Mothers age\" and a response \"51\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have added a second response \"52\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I have added a third response \"53\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I have added a fourth response \"54\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I want to view all the responses I have added",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I can check them from the beginning",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});