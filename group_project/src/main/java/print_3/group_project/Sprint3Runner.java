package print_3.group_project;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src\\main\\java\\print_3\\group_project\\Sprint3.feature"}, glue = {""}, plugin = {"pretty", 
							"html:target/ResultsTable/index.html"})
		
public class Sprint3Runner {

}
