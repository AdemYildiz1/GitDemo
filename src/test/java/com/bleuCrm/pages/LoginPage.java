package com.bleuCrm.pages;

import com.bleuCrm.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(name = "USER_LOGIN")
    public WebElement userName;

    @FindBy(xpath ="//input[@name='USER_PASSWORD']")
    public WebElement password;

    @FindBy (css = ".login-btn")
    public WebElement submit;

    public void login(String userNameStr, String passwordStr){
        userName.sendKeys(userNameStr);
        password.sendKeys(passwordStr);
        submit.click();

    }
}