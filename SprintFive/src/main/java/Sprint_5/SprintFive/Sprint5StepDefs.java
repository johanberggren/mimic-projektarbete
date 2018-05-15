package Sprint_5.SprintFive;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import static org.junit.Assert.*;

public class Sprint5StepDefs {
	public String Request;
	public String ResponseOne;
	public String ResponseTwo;
	public String ResponseThree;
	public String ResponseFour;
	
	@Given("^I have defined a request \"([^\"]*)\" and a response \"([^\"]*)\"$")
	public void i_have_defined_a_request_and_a_response(String arg1, String arg2) throws Throwable {
	   
	}

	@Given("^I have added a second response \"([^\"]*)\"$")
	public void i_have_added_a_second_response(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Given("^I have added a third response \"([^\"]*)\"$")
	public void i_have_added_a_third_response(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Given("^I have added a fourth response \"([^\"]*)\"$")
	public void i_have_added_a_fourth_response(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I want to view all the responses I have added$")
	public void i_want_to_view_all_the_responses_I_have_added() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I can check them from the beginning$")
	public void i_can_check_them_from_the_beginning() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
