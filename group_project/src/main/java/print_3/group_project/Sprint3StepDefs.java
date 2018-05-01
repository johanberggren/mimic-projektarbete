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

@Given("^I have defined a Response \"([^\"]*)\"$")
public void i_have_defined_a_Response(String arg1) throws Throwable {
    selenium.LearnNewResponse(arg1);
}

@When("^I ask mimic to unlearn previous response/request$")
public void i_ask_mimic_to_unlearn_previous_response_request() throws Throwable {
    selenium.Unlearn();
}

@Then("^The response/Request has been forgotten$")
public void the_response_Request_has_been_forgotten() throws Throwable {
    selenium.checkUnlearn(Request);
}

}
