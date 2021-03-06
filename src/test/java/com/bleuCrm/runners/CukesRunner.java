package com.bleuCrm.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(                         //matches futures and step definitions and runs with glue

        plugin = {"json:target/cucumber.json",       //to ask cucumber to create json file for report
                "html:target/default-html-reports", //to ask cucumber to create default file for report
                "rerun:target/rerun.txt" },         //cucumber will take a not which scenario failed in target folder

        features = "src/test/resources/features",   //1-settings/put where my futures folder is located
         glue = "com/bleuCrm/step_definitions",     //2-settings where step definitions are
         dryRun = true//,                        //true checks just to get the undefined steps, false runs each one
         //tags = "@wip"                              //runs certain scenario(s)

)
public class CukesRunner {

}
