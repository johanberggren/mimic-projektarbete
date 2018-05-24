package sprintSix.lastSprint;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;










	 
	@RunWith(Cucumber.class)
	@CucumberOptions(features= {"src\\main\\java\\SprintSix\\lastSprint\\Sprint6.feature"}, glue = {""}, plugin =  {"pretty" ,
	        "html:target/index.html"
			
			})

public class Sprint6Runner {

}
