

Feature: Random Practice with mimic

  
  Scenario: Testing mime type
    Given I define a response with its mime type
    And I define the request
    When I ask for the mime type 
    Then the mime type is correct 
    
  Scenario Outline: Testing various mime types
  Given the response is <response> and mime type is <mime>
  And  the request is <request>
  When I ask mimic for the mime type 
  Then It should return <mimetype>

  Examples:
    | response                              | mime                 | request             | mimetype            |
    |  "<value>1</value>"                   |  "application/xml"   |  "xml response"     |  "application/xml"  |
    |  "This is Text"                       |  "html/text"         |  "text response"    |    "html/text"      |
    |  "35"                                 |  "html/text"         |  "How many pets?"   | "html/text"         |
    | "success: true, payload"              | "application/json"   | "json request"      | "application/json"  |
    
    

 
