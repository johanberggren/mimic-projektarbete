package print_3.group_project;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import static org.junit.Assert.*;


public class Sprint3StepDefs {
	
	private static String host = "http://localhost:8080/";
	HttpServiceCaller service = new HttpServiceCaller();
	public String Request;
	public String Response;
	public String Result;
	public String Result2;
	public String EmptyResponse = "Paste or type json, xml, html or text response to learn and press Learn<br><br><form action=\"learn\" method=\"post\"><textarea name='text' rows='30' cols='150'></textarea><br><br><input type=\"submit\" id='learn' value=\"Learn\"></form>";
	
	@Given("^I have defined a response \"([^\"]*)\"$")
	public void i_have_defined_a_response(String arg1) throws Throwable {
		
		try {
	    service.executeGetRequest(host+"LearnNextResponse?text="+arg1);
		}catch(Exception e) {
			throw new Exception();
		}
	}

	@Given("^I have defined its request as \"([^\"]*)\"$")
	public void i_have_defined_its_request_as(String arg1) throws Throwable {
		Request = arg1;
		try {
	   service.executeGetRequest(host+arg1);
		}catch(Exception e) {
			throw new Exception();
		}
	}

	@When("^I want mimic to unlearn the response$")
	public void i_want_mimic_to_unlearn_the_response() throws Throwable {
		try {
			   service.executeGetRequest(host+"unlearn");
				}catch(Exception e) {
					throw new Exception();
				}
	}

	@Then("^the response has been forgotten$")
	public void the_response_has_been_forgotten() throws Throwable {
		
	    Result = service.executeGetRequest(host + Request );
	    
		System.out.println(Result);
		
		assertEquals(Result.contains("Rory"), false );
		
		
		
		
	}

//Scenario 2 Testing mimic through browser----------------------------------------------------------------------------
	//---------------------------------------------------------------------------
	SeleniumMethods selenium = new SeleniumMethods();

@Given("^I have defined a Request \"([^\"]*)\"$")
public void i_have_defined_a_Request(String arg1) throws Throwable {
	Request = arg1;
    selenium.launchBrowser();
    selenium.openLocalHost();
    selenium.LearnNewRequest(arg1);
}

@Given("^I have defined the Response \"([^\"]*)\"$")
public void i_have_defined_the_Response(String arg1) throws Throwable {
	selenium.LearnNewResponse(arg1);
}



@When("^I ask mimic to unlearn previous response/request$")
public void i_ask_mimic_to_unlearn_previous_response_request() throws Throwable {
    selenium.Unlearn();
}

@Then("^The response/Request has been forgotten$")
public void the_response_Request_has_been_forgotten() throws Throwable {
    selenium.checkUnlearn(Request);
    selenium.closeBrowser();
}


//Scenario3-----------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

@When("^I want to unlearn without rewriting the request$")
public void i_want_to_unlearn_without_rewriting_the_request() throws Throwable {
    service.executeGetRequest(host+"unlearn");
}

@Then("^Mimic forgets it$")
public void mimic_forgets_it() throws Throwable {
   Result = service.executeGetRequest(host+"How are you?");
   
   if(Result.equals("I am great")) {
	   throw new Exception();
   }
}

//Scenario4--------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

@Given("^I have defined multiple Request/Responses$")
public void i_have_defined_multiple_Request_Responses() throws Throwable {
    try {
    	service.executeGetRequest(host+"LearnNextResponse?text=Summer");
    	service.executeGetRequest(host+"What is the season?");
    }catch(Exception e) {
    	throw new Exception();
    }
}

@When("^I want mimic to unlearn everything$")
public void i_want_mimic_to_unlearn_everything() throws Throwable {
	try {
    	service.executeGetRequest(host+"unlearnAll");
    	
    }catch(Exception e) {
    	throw new Exception();
    }
}

@Then("^I can rerun all of the tests$")
public void i_can_rerun_all_of_the_tests() throws Throwable {
    Result = service.executeGetRequest(host+"my dads name");
    
    if(!Result.equals(EmptyResponse)) {
    	throw new Exception();
    }
}

//Scenario 5 ----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

@Given("^I have defined the response \"([^\"]*)\" with LearnNextResponse$")
public void i_have_defined_the_response_with_LearnNextResponse(String arg1) throws Throwable {
	try {
    	service.executeGetRequest(host+"LearnNextResponse?text=Winter");
    	
    }catch(Exception e) {
    	throw new Exception();
    }
}

@When("^I want to reset the state back to normal$")
public void i_want_to_reset_the_state_back_to_normal() throws Throwable {
	try {
    	service.executeGetRequest(host+"resetState");
    	
    }catch(Exception e) {
    	throw new Exception();
    }
}

@When("^I try and define a request$")
public void i_try_and_define_a_request() throws Throwable {
	try {
    	service.executeGetRequest(host+"Season");
    	
    }catch(Exception e) {
    	throw new Exception();
    }
}

@Then("^It will not apply to the previously defined response$")
public void it_will_not_apply_to_the_previously_defined_response() throws Throwable {
	Result = service.executeGetRequest(host+"Season");
	
    if(!Result.equals(EmptyResponse)) {
    	System.out.println("Result !!!!!!!= "+ Result);
    	throw new Exception();
    }
	
}

//Scenario 6 -------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

@When("^I reset the state$")
public void i_reset_the_state() throws Throwable {
    selenium.resetState();
}

@Then("^I can rerun a complete test scenario$")
public void i_can_rerun_a_complete_test_scenario() throws Throwable {
   
	
    	selenium.LearnNewRequest("What is the date?");
    	selenium.LearnNewResponse("04/07/2056");
    	Result = service.executeGetRequest(host+"What is the date?");
    	if(Result.equals(EmptyResponse)) {
    		throw new Exception();
    	}
    
}

}
