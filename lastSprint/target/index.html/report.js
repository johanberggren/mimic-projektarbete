$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/SprintSix/lastSprint/Sprint6.feature");
formatter.feature({
  "line": 3,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Informative responses with Text",
  "description": "",
  "id": "title-of-your-feature;informative-responses-with-text",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I have defined a request \"How old is your mother?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have set the mime type to \"Text\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I define the response \"She is 53\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "mimic will respond with something more descriptive than OK",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "How old is your mother?",
      "offset": 26
    }
  ],
  "location": "Sprint6StepDefs.i_have_defined_a_request(String)"
});
formatter.result({
  "duration": 12894206624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Text",
      "offset": 29
    }
  ],
  "location": "Sprint6StepDefs.i_have_set_the_mime_type_to(String)"
});
formatter.result({
  "duration": 178510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "She is 53",
      "offset": 23
    }
  ],
  "location": "Sprint6StepDefs.i_define_the_response(String)"
});
formatter.result({
  "duration": 2118908338,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK()"
});
formatter.result({
  "duration": 3074514278,
  "error_message": "java.lang.Exception\r\n\tat sprintSix.lastSprint.Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK(Sprint6StepDefs.java:69)\r\n\tat ✽.Then mimic will respond with something more descriptive than OK(src/main/java/SprintSix/lastSprint/Sprint6.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Informative responses with XML",
  "description": "",
  "id": "title-of-your-feature;informative-responses-with-xml",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I have defined a request \"3-2\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I have set the mime type to \"XML\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I define the response \"\u003cvalue\u003e1\u003c/value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "mimic will respond with something more descriptive than OK",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3-2",
      "offset": 26
    }
  ],
  "location": "Sprint6StepDefs.i_have_defined_a_request(String)"
});
formatter.result({
  "duration": 4506931327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XML",
      "offset": 29
    }
  ],
  "location": "Sprint6StepDefs.i_have_set_the_mime_type_to(String)"
});
formatter.result({
  "duration": 117776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cvalue\u003e1\u003c/value\u003e",
      "offset": 23
    }
  ],
  "location": "Sprint6StepDefs.i_define_the_response(String)"
});
formatter.result({
  "duration": 2355111445,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK()"
});
formatter.result({
  "duration": 1211981525,
  "error_message": "java.lang.Exception\r\n\tat sprintSix.lastSprint.Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK(Sprint6StepDefs.java:69)\r\n\tat ✽.Then mimic will respond with something more descriptive than OK(src/main/java/SprintSix/lastSprint/Sprint6.feature:17)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Informative responses with JSON",
  "description": "",
  "id": "title-of-your-feature;informative-responses-with-json",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I have defined a request \"json request\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I have set the mime type to \"JSON\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I define the response \"success: true, payload\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "mimic will respond with something more descriptive than OK",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "json request",
      "offset": 26
    }
  ],
  "location": "Sprint6StepDefs.i_have_defined_a_request(String)"
});
formatter.result({
  "duration": 4740030819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JSON",
      "offset": 29
    }
  ],
  "location": "Sprint6StepDefs.i_have_set_the_mime_type_to(String)"
});
formatter.result({
  "duration": 140346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success: true, payload",
      "offset": 23
    }
  ],
  "location": "Sprint6StepDefs.i_define_the_response(String)"
});
formatter.result({
  "duration": 3081302181,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK()"
});
formatter.result({
  "duration": 3399825594,
  "error_message": "java.lang.Exception\r\n\tat sprintSix.lastSprint.Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK(Sprint6StepDefs.java:69)\r\n\tat ✽.Then mimic will respond with something more descriptive than OK(src/main/java/SprintSix/lastSprint/Sprint6.feature:23)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "Informative responses with AUTO",
  "description": "",
  "id": "title-of-your-feature;informative-responses-with-auto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I have defined a request \"3-2\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I have set the mime type to \"Auto\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I define the response \"\u003cvalue\u003e1\u003c/value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "mimic will respond with something more descriptive than OK",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3-2",
      "offset": 26
    }
  ],
  "location": "Sprint6StepDefs.i_have_defined_a_request(String)"
});
formatter.result({
  "duration": 4733658209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto",
      "offset": 29
    }
  ],
  "location": "Sprint6StepDefs.i_have_set_the_mime_type_to(String)"
});
formatter.result({
  "duration": 196156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cvalue\u003e1\u003c/value\u003e",
      "offset": 23
    }
  ],
  "location": "Sprint6StepDefs.i_define_the_response(String)"
});
formatter.result({
  "duration": 2134078015,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK()"
});
formatter.result({
  "duration": 1365950915,
  "error_message": "java.lang.Exception\r\n\tat sprintSix.lastSprint.Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK(Sprint6StepDefs.java:69)\r\n\tat ✽.Then mimic will respond with something more descriptive than OK(src/main/java/SprintSix/lastSprint/Sprint6.feature:29)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
  "name": "Informative responses with HTML",
  "description": "",
  "id": "title-of-your-feature;informative-responses-with-html",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I have defined a request \"HTML request\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I have set the mime type to \"HTML\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I define the response \"\u003ctitle\u003e400 Bad Request\u003c/title\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "mimic will respond with something more descriptive than OK",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HTML request",
      "offset": 26
    }
  ],
  "location": "Sprint6StepDefs.i_have_defined_a_request(String)"
});
formatter.result({
  "duration": 4561424553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTML",
      "offset": 29
    }
  ],
  "location": "Sprint6StepDefs.i_have_set_the_mime_type_to(String)"
});
formatter.result({
  "duration": 254839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ctitle\u003e400 Bad Request\u003c/title\u003e",
      "offset": 23
    }
  ],
  "location": "Sprint6StepDefs.i_define_the_response(String)"
});
formatter.result({
  "duration": 2515008608,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK()"
});
formatter.result({
  "duration": 1200817454,
  "error_message": "java.lang.Exception\r\n\tat sprintSix.lastSprint.Sprint6StepDefs.mimic_will_respond_with_something_more_descriptive_than_OK(Sprint6StepDefs.java:69)\r\n\tat ✽.Then mimic will respond with something more descriptive than OK(src/main/java/SprintSix/lastSprint/Sprint6.feature:35)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "Informative Responses with LearnNextResponse",
  "description": "",
  "id": "title-of-your-feature;informative-responses-with-learnnextresponse",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I have defined a response \"Hi How are you?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I ask mimic to learn it with LearnNextResponse",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "It will respond with something other than OK",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hi How are you?",
      "offset": 27
    }
  ],
  "location": "Sprint6StepDefs.i_have_defined_a_response(String)"
});
formatter.result({
  "duration": 137352754,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.i_ask_mimic_to_learn_it_with_LearnNextResponse()"
});
formatter.result({
  "duration": 80512222,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.it_will_respond_with_something_other_than_OK()"
});
formatter.result({
  "duration": 23209204,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "LearnNextResponse without Parameters",
  "description": "",
  "id": "title-of-your-feature;learnnextresponse-without-parameters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I have defined a response without parameters",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I ask mimic to learn it",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Mimic will respond with a response form",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint6StepDefs.i_have_defined_a_response_without_parameters()"
});
formatter.result({
  "duration": 55829385,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.i_ask_mimic_to_learn_it()"
});
formatter.result({
  "duration": 40474632,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.mimic_will_respond_with_a_response_form()"
});
formatter.result({
  "duration": 1579507,
  "error_message": "java.lang.Exception\r\n\tat sprintSix.lastSprint.Sprint6StepDefs.mimic_will_respond_with_a_response_form(Sprint6StepDefs.java:148)\r\n\tat ✽.Then Mimic will respond with a response form(src/main/java/SprintSix/lastSprint/Sprint6.feature:45)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 47,
  "name": "Testing response link in ViewRequest",
  "description": "",
  "id": "title-of-your-feature;testing-response-link-in-viewrequest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I have defined a request/response",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I view the saved requests",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "click on the request link",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the response will appear",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint6StepDefs.i_have_defined_a_request_response()"
});
formatter.result({
  "duration": 6751554373,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.i_view_the_saved_requests()"
});
formatter.result({
  "duration": 475593136,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.click_on_the_request_link()"
});
formatter.result({
  "duration": 343289143,
  "status": "passed"
});
formatter.match({
  "location": "Sprint6StepDefs.the_response_will_appear()"
});
formatter.result({
  "duration": 545096816,
  "status": "passed"
});
});