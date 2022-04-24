package com.bleuCrm.step_definitions;

import com.bleuCrm.utilities.BrowserUtils;
import com.bleuCrm.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class searchFilterDefs {

    @When("the user clicks the filter and search box")
    public void the_user_clicks_the_search_box() {
         Driver.get().findElement(By.cssSelector("#LIVEFEED_search")).click();
        BrowserUtils.waitFor(3);

    }

    @Then("the user should see following default filters")
    public void the_user_should_see_following_default_filters(List<String> expectedDefaultFilters) {
        System.out.println("expectedDefaultFilters = " + expectedDefaultFilters);

        List<WebElement>filterMenu =Driver.get().findElements(By.cssSelector(".main-ui-filter-sidebar-item-container"));

        List<String> actualDefaultFilters=BrowserUtils.getElementsText(filterMenu);

        System.out.println("actualDefaultFilters = " + actualDefaultFilters);

        Assert.assertEquals("verify default filters",actualDefaultFilters,expectedDefaultFilters);


    }
    @When("the user clicks the add field")
    public void the_user_clicks_the_add_field() {
        Driver.get().findElement(By.cssSelector(".main-ui-filter-field-add-item")).click();
        BrowserUtils.waitFor(2);

    }

    @When("the user selects the {string}")
    public void the_user_selects_the(String fieldType) {

        //IF FIELD CHECK BOX SELECTED

        //Locator fieldCheckbox dynamically
        String checkboxXPATH="//*[@id='popup-window-content-LIVEFEED_fields_popup']//div[text()='"+fieldType+"']";

       if(Driver.get().findElement(By.xpath(checkboxXPATH)).isSelected()){


       }

    }
    @Then("the user should see the title of field as a {string}")
    public void the_user_should_see_the_title_of_field_as_a(String fieldName) {
       // VERIFY THAT WE HAVE FIELD INPUTBOX title/name on the page

        //Locator fieldInputbox dynamically
        String fieldNameXPATH="//*[@title='"+fieldName+"']";

        //actualFieldName
        String actualFieldName=Driver.get().findElement(By.xpath(fieldNameXPATH)).getText();
        System.out.println("actualFieldName = " + actualFieldName);

        //expectedFieldName from pipes
        System.out.println("expectedFieldName = " + fieldName);

        Assert.assertEquals("verify title of checkbox",actualFieldName, fieldName);


    }

    @When("the user selects the {string} to remove")
    public void the_user_selects_the_to_remove(String fieldType) {

        //IF FIELD CHECK BOX UNSELECTED

        //Locator fieldCheckbox dynamically
        String checkboxXPATH="//*[@id='popup-window-content-LIVEFEED_fields_popup']//div[text()='"+fieldType+"']";

        //unselect the checkbox
        Driver.get().findElement(By.xpath(checkboxXPATH)).click();
        BrowserUtils.waitFor(2);

//        if(!Driver.get().findElement(By.xpath(checkboxXPATH)).isSelected()) {
//
//        }
       }

    @Then("the user should NOT be able to click the {string}")
    public void the_user_should_NOT_be_able_to_click_the(String fieldNamebox) {
        // VERIFY THAT WE HAVE FIELD INPUTBOX title/name on the page

        //Locator fieldInputbox dynamically
       // String fieldNameXPATH="//*[@class='main-ui-filter-field-container-list']";

        //System.out.println("Driver.get().findElement(By.xpath(fieldNameXPATH)).getText() = " + Driver.get().findElement(By.xpath(fieldNameXPATH)).);

        WebElement name = Driver.get().findElement(By.xpath("(//*[@class='main-ui-filter-field-container-list'])/div[1]"));

        Assert.assertFalse(name.isEnabled());

    }

}
