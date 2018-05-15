
@tag
Feature: Sprint Five Mimic
  

  @tag1
  Scenario Outline: Viewing Previously defined Responses
    Given I have defined a request <Request> and a response <ResponseOne>
    And I have added a second response <ResponseTwo>
    And I have added a third response <ResponseThree>
    And I have added a fourth response <ResponseFour>
    When I want to view all the responses I have added 
    Then I can check them from the beginning
    

  Examples:
  
 |Request            |ResponseOne|ResponseTwo  |ResponseThree|ResponseFour|
 |"My Mothers age"   |"51"       |"52"         |"53"         |"54"        |