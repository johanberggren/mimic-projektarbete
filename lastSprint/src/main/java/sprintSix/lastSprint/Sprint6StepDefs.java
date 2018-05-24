package sprintSix.lastSprint;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.net.URL;
import java.net.URLConnection;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;




public class Sprint6StepDefs {
	
	HttpServiceCaller service = new HttpServiceCaller();
	MimicSeleniumMethods selenium = new MimicSeleniumMethods();
	public String Request;
	public String MimeType;
	public String Response;
	public String LearnNextResponse = "http://localhost:8080/LearnNextResponse?text=";
	public String Result;
	public String host = "http://localhost:8080/";
	//Scenario 1------------------------------------------------------------------------
	
	@Given("^I have defined a request \"([^\"]*)\"$")
	public void i_have_defined_a_request(String arg1) throws Throwable {
		Request = arg1;
	    try {
	    	selenium.launchBrowser();
	    	selenium.learnNewRequest(Request);
	    	
	    }catch(Exception e) {
	    	e.printStackTrace();
	    }
	}

	@Given("^I have set the mime type to \"([^\"]*)\"$")
	public void i_have_set_the_mime_type_to(String arg1) throws Throwable {
		 try {
		    	MimeType= arg1;
		    	
		    }catch(Exception e) {
		    	e.printStackTrace();
		    }
	}

	@When("^I define the response \"([^\"]*)\"$")
	public void i_define_the_response(String arg1) throws Throwable {
		Response = arg1;
		try {
	    selenium.learnNewresponseAndMimeType(Response, MimeType);
		}catch(Exception e ) {
			e.printStackTrace();
		}
	}

	@Then("^mimic will respond with something more descriptive than OK$")
	public void mimic_will_respond_with_something_more_descriptive_than_OK() throws Throwable {
	 Response= selenium.ReturnResponse();   
	 if(Response.equals("OK")) {
		 
		 System.out.println("Response is not Descriptive enough");
		 selenium.driver.get("http://localhost:8080/UnlearnAllResponses");
		 selenium.driver.close();
		 throw new Exception();
	 }
	 System.out.println(Response);
	 selenium.driver.get("http://localhost:8080/UnlearnAllResponses");
	 
	 selenium.driver.close();
	}
	
	//Scenario 2-5------------------------------------------------------------------------------------------
	
	
	@Given("^I have defined another request \"([^\"]*)\"$")
	public void i_have_defined_another_request(String arg1) throws Throwable {
		Request = arg1;
	    try {
	    	
	    	selenium.driver.get("http://localhost:8080/"+Request);
	    	
	    }catch(Exception e) {
	    	e.printStackTrace();
	    }
	}
	
	//Scenario 6 ----------------------------------------------------------------------------------------------
	//-----------------------------------------------------------
	

@Given("^I have defined a response \"([^\"]*)\"$")
public void i_have_defined_a_response(String arg1) throws Throwable {
	Response = arg1;
	try {
    service.executeGetRequest(LearnNextResponse+Response);
	}catch(Exception e) {
		e.printStackTrace();
	}
}

@When("^I ask mimic to learn it with LearnNextResponse$")
public void i_ask_mimic_to_learn_it_with_LearnNextResponse() throws Throwable {
	try {
	    Result= service.executeGetRequest(LearnNextResponse+Response);
		}catch(Exception e) {
			e.printStackTrace();
		}
}

@Then("^It will respond with something other than OK$")
public void it_will_respond_with_something_other_than_OK() throws Throwable {
    if(Result.equals("OK")) {
    	throw new Exception();
    }else {
    	System.out.println(Result);
    }
    service.executeGetRequest("http://localhost:8080/PracticeRequest");
    
    service.executeGetRequest("http://localhost:8080/UnlearnAllResponses");
}

//Scenario7-----------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

@Given("^I have defined a response without parameters$")
public void i_have_defined_a_response_without_parameters() throws Throwable {
    try {
    	service.executeGetRequest("http://localhost:8080/LearnNextResponse?");
    }catch(Exception e) {
    	e.printStackTrace();
    }
}

@When("^I ask mimic to learn it$")
public void i_ask_mimic_to_learn_it() throws Throwable {
    Result = service.executeGetRequest("http://localhost:8080/LearnNextResponse?");
}

@Then("^Mimic will respond with a response form$")
public void mimic_will_respond_with_a_response_form() throws Throwable {
    if(! Result.equals("Paste or type json, xml, html or text response to learn and press Learn")) {
    	System.out.println(Result);
    	throw new Exception();
    }
}

//Scenario8---------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

@Given("^I have defined a request/response$")
public void i_have_defined_a_request_response() throws Throwable {
	Response= "She is 67";
	MimeType = "Auto";
	try {
		selenium.launchBrowser();
    selenium.learnNewRequest("How old is your grandmother?");
    selenium.learnNewresponseAndMimeType(Response, MimeType);
	}catch(Exception e) {
		throw new Exception();
	}
}

@When("^I view the saved requests$")
public void i_view_the_saved_requests() throws Throwable {
    try {
    	
    	selenium.driver.get(host+"ViewRequests");
    	selenium.driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
    }catch(Exception e) {
    	e.printStackTrace();
    }
}

@When("^click on the request link$")
public void click_on_the_request_link() throws Throwable {
	WebElement element = selenium.driver.findElement(By.cssSelector("body > a"));
	element.click();
	selenium.driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
}

@Then("^the response will appear$")
public void the_response_will_appear() throws Throwable {
    Response = selenium.ReturnResponse();
    if(! Response.equals("She is 67")) {
    	System.out.println(Response);
    	
    	
    	selenium.driver.get(host+"UnlearnResponse");
    	throw new Exception();
    }
    
    System.out.println(Response);
    
    selenium.driver.get(host+"UnlearnResponse");
}

}
