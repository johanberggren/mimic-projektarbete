Feature: Testing Mimic.jar 
  

 

    
   
    Scenario: I want mimic to learn something
  
  	Given Mimic is ready
  	 When learns to handle "My dads name" with response "Bill"
  	Then Sent "my dads name" mimic returns "Bill"
  	
    Scenario: I want mimic to change a previously learned response 
    
    Given mimic has learned "My dads name" with response "Bill"
    When I change the "My dads name" response to "Rory"
    Then mimic changes the response to "Rory"
    
    Scenario: I want mimic to refuse to learn a null request
    
    Given I have defined the response "75"
    When  I define it's request as null
    Then mimic will not learn the request and return "75"
    
    Scenario: I want mimic to refuse to learn a null response
    
    Given I have defined a response as null
    When I define its request as "What is the weather like today?"
    Then Mimic will not learn null response
    
    
    

 