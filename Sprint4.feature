

Feature: Sprint Four Mimic
  

  
  Scenario Outline: Mimic should forget response mid sequence
    Given I have defined next response as <nextResponse> with MimeTpe <mimetype>
    When  I ask mimic to unlearn the previously defined response mid sequence
    Then  the response will not be coupled with <Request>
    
    Examples: 
      | nextResponse            | mimetype           | Request       |
      | "success: true, payload"|"application/json"  | "jsonRequest" |
      | "<value>1</value>"      |"application/xml"   | "xmlRequest"  |
      | "This is Text"          |"html/text"         | "htmlRequest" |
      | "35"                    |"html/text"         | "htmlRequest2"|
      | "null"                  |"html/text"         | "nullRequest" |
      | ""                      | "null"             | "emptyStringResponse"|
      |  55                     | "null"             | "int Response"|
      | "Rory"                  | "html/text"        |   "TextResponse"            |
      |"null"                   |"application/json"  | "nullResponse"|
      |" Mark"                  | "null"             | "nullMime"    |      
      
      
        Scenario Outline: Mimic should forget Request mid sequence
    Given I have defined next request as <nextRequest> 
    When  I ask mimic to unlearn the previously defined Request mid sequence
    Then  the state will be reset
    
    Examples: 
      | nextRequest             | 
      | "success: true, payload"|
      | "<value>1</value>"      |
      | "This is Text"          |
      | "35"                    |
      | "null"                  |
      | ""                      |
      
      
    
    Scenario Outline: Testing mimic with various values
    	Given I have defined Response as <Response> with mimeType <mimeType>
    	When I define its request as <request>
    	Then Mimic will learn it
    	
    	Examples:
    	|Response                 |mimeType            |request|
    	| "success: true, payload"|"application/json"  | "jsonRequest" |
      | "<value>1</value>"      |"application/xml"   | "xmlRequest"  |
      | "This is Text"          |"html/text"         | "htmlRequest" |
      | "null"                  |"null"              | "nullRequest" |
      | "Howdy"                 |"html/text"         |"null"         |
      | "null"                  |"application/json"  |"nullJson"     |
      | "Practice"              |"nullPractice"      |"null"         |
      |"json Request"           | "application/json"             |"success: true, payload"	| 
      
   Scenario Outline: Testing requests that I have not defined
    Given I initiate mimic with <value1> add <value2>
    And   <value3> add <value4>
    When  I add <value5> and <value6>
    Then  The answer will be <answer> 

    Examples: 
      | value1        |    value2       |  value3  | value4|value5|value6|answer|
      |   5           |     10          |     5    | 17    | 5    | 11   | 16   |
      |   5           |     5           |     5    | 7     | 5    | 18   | 23   |
      |   5           |     10          |     5    | 17    | 5    | 11   | 16   | 
      |   10          |     10          |    10    | 20    | 10   | 50   | 60   |
      |   10          |     7           |    10    | 9     |  10  | 5    | 15   |
      |   10          |     10          |    10    | 30    | 10   | 89   | 99   |     
      |   10          |     20          |    10    | 19    | 10   | 76   | 86   | 
      |   10          |     102         |    10    | 18    | 20   | 80   | 100  |
      |   10          |     20          |    30    | 10    | 10   | 40   | 50   |
      |   11          |      9          |    11    | 7     | 11   | 3    | 14   |
      |   11          |     10          |    11    | 20    | 11   | 40   | 51   |
      |   100         |     100         |    100   | 80    | 100  |  70  | 170  |
      |   1           |      3          |    1     | 4     | 1    |  1   | 3.5  |
      
      
      Scenario Outline: Testing mimic with different operators 
      
      	Given I want to <action> the values <value1> and <value2>
      	And   also <value3> and <value4>
      	When I calculate <value5> with <value6>
      	Then the Answer will be <answer>
      	
      	Examples: 
      | value1        | action          |   value2         |  value3  | value4|value5|value6|answer|
      |   5           |  "sub"          |    10            |     5    | 17    | 5    | 4    |   1  |
      |   11          |  "add"          |    10            |    11    | 20    | 11   | 40   | 51   |
      |   2           |  "mult"         |    10            |     2    | 15    |  2   | 20   | 40   |
      |   8           |  "div"          |    4             |     8    |  2    | 8    | 8    | 1    |
      |  1009         |  "sub"          |    100           |   1009   | 90    | 1009 | 97   | 12   |
      |100            |  "sub"          |    30            |   100    |  90   | 100  | 95   | 5    |
      |  6            |  "mult"         |    6             |   6      |  7    | 6    | 10   | 60   |
      |   100         |  "mult"         |    10            |   100    | 7     | 100  | 99   | 9900 |
      |  150          |  "sub"          |    50            |   150    |  75   | 150  | 120  | 30   | 
      |  7            |  "add"          |    7             |   7      |  19   | 7    |  87  | 44   |
      
       
   
      
    
      
      
   