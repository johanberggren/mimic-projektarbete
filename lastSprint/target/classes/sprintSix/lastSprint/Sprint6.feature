

Feature: Title of your feature
  I want to use this template for my feature file

  
  Scenario: Informative responses with Text
    Given I have defined a request "How old is your mother?"
    And I have set the mime type to "Text"
    When I define the response "She is 53"
    Then mimic will respond with something more descriptive than OK
    
    Scenario: Informative responses with XML
    Given I have defined a request "3-2"
    And I have set the mime type to "XML"
    When I define the response "<value>1</value>"
    Then mimic will respond with something more descriptive than OK
    
    Scenario: Informative responses with JSON
    Given I have defined a request "json request"
    And I have set the mime type to "JSON"
    When I define the response "success: true, payload"
    Then mimic will respond with something more descriptive than OK
    
    Scenario: Informative responses with AUTO
    Given I have defined a request "3-2"
    And I have set the mime type to "Auto"
    When I define the response "<value>1</value>"
    Then mimic will respond with something more descriptive than OK
    
    Scenario: Informative responses with HTML
    Given I have defined a request "HTML request"
    And I have set the mime type to "HTML"
    When I define the response "<title>400 Bad Request</title>"
    Then mimic will respond with something more descriptive than OK
  
  	Scenario: Informative Responses with LearnNextResponse
  	Given I have defined a response "Hi How are you?"
  	When I ask mimic to learn it with LearnNextResponse
  	Then It will respond with something other than OK
  	
  	Scenario: LearnNextResponse without Parameters
  	Given I have defined a response without parameters
  	When I ask mimic to learn it
  	Then Mimic will respond with a response form
  	
  	Scenario: Testing response link in ViewRequest
  	Given I have defined a request/response
  	When I view the saved requests 
  	And click on the request link
  	Then the response will appear
  	
 

 
