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
  "duration": 435340546,
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
  "duration": 4596121,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_want_mimic_to_unlearn_the_response()"
});
formatter.result({
  "duration": 14094999,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.the_response_has_been_forgotten()"
});
formatter.result({
  "duration": 10886720,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test mimic unlearn through Browser",
  "description": "",
  "id": "testing-sprint-3-mimic;test-mimic-unlearn-through-browser",
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
  "name": "I have defined the Response \"Jimmy\"",
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
  "duration": 9183461830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jimmy",
      "offset": 29
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_the_Response(String)"
});
formatter.result({
  "duration": 634830663,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_ask_mimic_to_unlearn_previous_response_request()"
});
formatter.result({
  "duration": 100556106,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.the_response_Request_has_been_forgotten()"
});
formatter.result({
  "duration": 601135465,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I want to unlearn previous response without having to rewrite request",
  "description": "",
  "id": "testing-sprint-3-mimic;i-want-to-unlearn-previous-response-without-having-to-rewrite-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I have defined a response \"How are you?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I have defined its request as \"I am great\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I want to unlearn without rewriting the request",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Mimic forgets it",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "How are you?",
      "offset": 27
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_a_response(String)"
});
formatter.result({
  "duration": 17195557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I am great",
      "offset": 31
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_its_request_as(String)"
});
formatter.result({
  "duration": 6391481,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_want_to_unlearn_without_rewriting_the_request()"
});
formatter.result({
  "duration": 17422969,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.mimic_forgets_it()"
});
formatter.result({
  "duration": 19111748,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "I want to unlearn all responses previously defined so I can rerun tests",
  "description": "",
  "id": "testing-sprint-3-mimic;i-want-to-unlearn-all-responses-previously-defined-so-i-can-rerun-tests",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I have defined multiple Request/Responses",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I want mimic to unlearn everything",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I can rerun all of the tests",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint3StepDefs.i_have_defined_multiple_Request_Responses()"
});
formatter.result({
  "duration": 20707622,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_want_mimic_to_unlearn_everything()"
});
formatter.result({
  "duration": 10575524,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_can_rerun_all_of_the_tests()"
});
formatter.result({
  "duration": 11563826,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I want to reset the state of mimic",
  "description": "",
  "id": "testing-sprint-3-mimic;i-want-to-reset-the-state-of-mimic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I have defined the response \"Father\" with LearnNextResponse",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I want to reset the state back to normal",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I try and define a request",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "It will not apply to the previously defined response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Father",
      "offset": 29
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_the_response_with_LearnNextResponse(String)"
});
formatter.result({
  "duration": 10337853,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_want_to_reset_the_state_back_to_normal()"
});
formatter.result({
  "duration": 7484085,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_try_and_define_a_request()"
});
formatter.result({
  "duration": 9128977,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.it_will_not_apply_to_the_previously_defined_response()"
});
formatter.result({
  "duration": 6557338,
  "error_message": "java.lang.Exception\r\n\tat print_3.group_project.Sprint3StepDefs.it_will_not_apply_to_the_previously_defined_response(Sprint3StepDefs.java:182)\r\n\tat ✽.Then It will not apply to the previously defined response(src/main/java/print_3/group_project/Sprint3.feature:44)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 46,
  "name": "I want to reset the state after completing a full request/response definition",
  "description": "",
  "id": "testing-sprint-3-mimic;i-want-to-reset-the-state-after-completing-a-full-request/response-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I have defined a Request \"How are you?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I have defined the Response \"Terrible\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I reset the state",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I can rerun a complete test scenario",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "How are you?",
      "offset": 26
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_a_Request(String)"
});
formatter.result({
  "duration": 5452843309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terrible",
      "offset": 29
    }
  ],
  "location": "Sprint3StepDefs.i_have_defined_the_Response(String)"
});
formatter.result({
  "duration": 474441771,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_reset_the_state()"
});
formatter.result({
  "duration": 104053923,
  "status": "passed"
});
formatter.match({
  "location": "Sprint3StepDefs.i_can_rerun_a_complete_test_scenario()"
});
formatter.result({
  "duration": 523478461,
  "error_message": "java.lang.Exception\r\n\tat print_3.group_project.Sprint3StepDefs.i_can_rerun_a_complete_test_scenario(Sprint3StepDefs.java:203)\r\n\tat ✽.Then I can rerun a complete test scenario(src/main/java/print_3/group_project/Sprint3.feature:51)\r\n",
  "status": "failed"
});
});