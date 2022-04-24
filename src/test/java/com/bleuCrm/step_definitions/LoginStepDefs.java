package com.bleuCrm.step_definitions;

import com.bleuCrm.pages.LoginPage;
import com.bleuCrm.utilities.BrowserUtils;
import com.bleuCrm.utilities.ConfigurationReader;
import com.bleuCrm.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefs {
    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));

    }

    @When("the user enters the credentials as a {string}")
    public void the_user_enters_the_credentials_as_a(String userType) {
       String username=null;
       String password=null;

       if(userType.equals("helpdesk")){
           username=ConfigurationReader.get("helpdesk_username");
           password=ConfigurationReader.get("helpdesk_password");
       }

       new LoginPage().login(username,password);

    }

    @Then("the title contains {string}")
    public void the_title_contains(String expectedTitle) {

        System.out.println("Driver.get().getTitle() = " + Driver.get().getTitle());

        BrowserUtils.waitForPageToLoad(5);
        String actualTitle=Driver.get().getTitle();

        Assert.assertTrue(actualTitle.contains(expectedTitle));

    }


}
