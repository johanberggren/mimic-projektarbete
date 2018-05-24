package sprintSix.lastSprint;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
 

public class MimicSeleniumMethods {
	
	WebDriver driver; 
	public String Mime_Drop;
	public String SeleniumResponse;
	public String Text;
	public String DropDown;
	
	public void launchBrowser() {
	
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Mark Tennyson\\Downloads\\Automation\\SeleniumServer\\chromedriver.exe");
	driver = new ChromeDriver();	 
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	public void openLocalHost() {
		driver.get("http://localhost:8080");
	}
	
	public void learnNewresponseAndMimeType(String Response, String Mime) throws InterruptedException {
		
		WebElement button = driver.findElement(By.cssSelector("#learn"));
		WebElement element = driver.findElement(By.cssSelector("body > form > textarea"));
		
		Actions action = new Actions(driver);
		action.moveToElement(element).click(element);
		driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
		
		element.sendKeys(Response);
		
		driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
		
		WebElement mimeDropDown = driver.findElement(By.cssSelector("body > form > select"));
		mimeDropDown.click();
		driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
		
		
		if(Mime.equals("Auto")) {
			DropDown = "body > form > select > option:nth-child(1)";
		}else if(Mime.equals("JSON")) {
			DropDown = "body > form > select > option:nth-child(2)";
		}else if(Mime.equals("XML")) {
			DropDown = "body > form > select > option:nth-child(3)";
		}else if(Mime.equals("HTML")) {
			DropDown = "body > form > select > option:nth-child(4)";
		}else if(Mime.equals("Text")) {
			DropDown = "body > form > select > option:nth-child(5)";
		}
		
		WebElement MimeTypeDecision = driver.findElement(By.cssSelector(DropDown));
		
		
		MimeTypeDecision.click();
		
		
		
		
		
		
		driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
		
		
		button.click();
	}
	
	public String ReturnResponse() {
		WebElement element = driver.findElement(By.cssSelector("body"));
		element.click();
		Text = element.getText();
		return Text;
	}
	
	public void learnNewResponse(String response) {
		WebElement element = driver.findElement(By.cssSelector("body > form > textarea"));
		
		Actions action = new Actions(driver);
		action.moveToElement(element).click(element);
		driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
		
		element.sendKeys(response);
		
		WebElement button = driver.findElement(By.cssSelector("#learn"));
		
		button.click();
	}
	
	public void learnNewRequest(String request) {
		driver.get("http://localhost:8080/"+ request);
		driver.manage().timeouts().implicitlyWait(2,  TimeUnit.SECONDS);
	}
	
	public void unlearn() {
		driver.get("http://localhost:8080/unlearn");
	}
	
	public boolean isStateSet(String request) {
		
		driver.get("http://localhost:8080/"+request);
		if(driver.getPageSource().contains("Paste or type json, xml, html or text response to learn and press Learn")) {
			return true;
		}else { return false;}
		
	}
	
	
	
	
}
