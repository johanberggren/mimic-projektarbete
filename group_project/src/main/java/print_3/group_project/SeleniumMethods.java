package print_3.group_project;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.*;

public class SeleniumMethods {
	WebDriver driver;
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\johan\\Desktop\\SchoolStuff\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	
	public void openLocalHost() {
		driver.get("http://localhost:8080");
	}
	
	public void LearnNewRequest(String request) {
		driver.get("http://localhost:8080/"+request);
		
	}
	
	public void LearnNewResponse(String response) {
		
		WebElement element = driver.findElement(By.cssSelector("body > form > textarea"));
		
		
		Actions action = new Actions(driver);
		action.moveToElement(element).click(element).build().perform();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		
		element.sendKeys("Jimmy");
		element.sendKeys(Keys.ENTER);
	}
	
	public void Unlearn() {
		driver.get("http://localhost:8080/unlearn");
	}

	public void checkUnlearn(String request) {
		driver.get("http://localhost:8080/"+request);
	}
	


public static void HoverAndClick(WebDriver driver,WebElement elementToHover,WebElement elementToClick) {
	Actions action = new Actions(driver);
	action.moveToElement(elementToHover).click(elementToClick).build().perform();
}
}
