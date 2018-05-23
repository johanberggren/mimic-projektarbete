#tag 19
Feature: Fix problem with blank responses
	Scenario: Replace response to the last request
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/RelearnResponse"
		Then Mimic doesn´t return a blank response 
	
	Scenario: Add new Response to last request
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/AddResponse"
		Then Mimic doesn´t return a blank response 
	
	Scenario: Unlearn the previous response
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/UnlearnResponse"
		Then Mimic doesn´t return a blank response 
	
	Scenario: unlearn all responses
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/UnlearnAllResponses"
		Then Mimic doesn´t return a blank response 
	
	Scenario: Define a response before triggering a request to prevent the form from appearing
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/LearnNextResponse?text=Hello"
		Then Mimic doesn´t return a blank response 
	
	Scenario: Define a response before triggering a request to prevent the form from appearing by specifying mime type
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/LearnNextResponse?text=<value>1</value>&mime=application/xml"
		Then Mimic doesn´t return a blank response 
	
	Scenario: Reset the simulated application state (to repeat all sequences again)
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/ResetState"
		Then Mimic doesn´t return a blank response 
	
	Scenario: View all requests
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/ViewRequests"
		Then Mimic doesn´t return a blank response 
	
	Scenario: Add value1 with value2
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/add?value1=10&value2=20"
		Then Mimic doesn´t return a blank response 
	
	Scenario: Close Mimic and save the learned responses
		Given Mimic v.0.5 is started
		When Inputing "http://localhost:8080/KillMimic"
		Then Mimic doesn´t return a blank response 


#tag 20
Feature: (WIP)Correct problem when not specifying a value, for example /test?param
	Scenario: Add value1 with value2
		Given Mimic v.0.5 is started
		When inputing "http://localhost:8080/add?value1=&value2="
		Then <Correct problem>
		
	Scenario: Add value1 with value2
		Given Mimic v.0.5 is started
		When inputing "http://localhost:8080/add?value1&value2"
		Then <Correct problem>
		
	Scenario: Add value1 with value2
		Given Mimic v.0.5 is started
		When inputing "http://localhost:8080/add?"
		Then <Correct problem>


#tag 21
Feature: (WIP)Fix problem learning a longer path test/testar?hello
	Scenario: 
		Given Mimic v.0.5 is started
		When Learning <longer path>
		Then <Correct response from Mimic>
