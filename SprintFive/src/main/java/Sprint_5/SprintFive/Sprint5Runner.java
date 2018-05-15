package Sprint_5.SprintFive;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src\\main\\java\\Sprint_5\\SprintFive\\Sprint5.feature"}, glue = {""}, plugin = {"pretty", 
							"html:target/ResultsTable/index.html"})

public class Sprint5Runner {

}
