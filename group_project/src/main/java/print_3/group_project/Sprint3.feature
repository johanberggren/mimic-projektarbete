

Feature: Testing Sprint 3 Mimic
  

  
  Scenario: Test mimic through Http call
  
    Given I have defined a response "Rory"
    And  I have defined its request as "my dads name"
    When I want mimic to unlearn the response 
    Then the response has been forgotten
    
    Scenario: Test mimic through Browser
    
  Given I have defined a Request "my brothers name"
  And   I have defined a Response "Jimmy"
  When  I ask mimic to unlearn previous response/request
  Then  The response/Request has been forgotten
    
 
  
		
		
		
		
    
    
  
    
    

 
