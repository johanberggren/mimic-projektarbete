

Feature: Testing Sprint 3 Mimic
  

  
  Scenario: Test mimic through Http call
  
    Given I have defined a response "Rory"
    And  I have defined its request as "my dads name"
    When I want mimic to unlearn the response 
    Then the response has been forgotten
    
    Scenario: Test mimic unlearn through Browser
    
  Given I have defined a Request "my brothers name"
  And   I have defined the Response "Jimmy"
  When  I ask mimic to unlearn previous response/request
  Then  The response/Request has been forgotten
    
    
    Scenario: I want to unlearn previous response without having to rewrite request
    
    Given I have defined a response "How are you?"
    And I have defined its request as "I am great"
    When I want to unlearn without rewriting the request
    Then Mimic forgets it 
    
    
    Scenario: I want to unlearn all responses previously defined so I can rerun tests
    
    Given I have defined multiple Request/Responses
    When I want mimic to unlearn everything
    Then I can rerun all of the tests
 
  
		
		
		Scenario: I want to reset the state of mimic 
		
		Given I have defined the response "Father" with LearnNextResponse
		When I want to reset the state back to normal
		And I try and define a request
		Then It will not apply to the previously defined response
		
		Scenario: I want to reset the state after completing a full request/response definition
		
		 Given I have defined a Request "How are you?"
     And I have defined the Response "Terrible"
     When I reset the state
     Then I can rerun a complete test scenario
    
    
  
    
    

 
