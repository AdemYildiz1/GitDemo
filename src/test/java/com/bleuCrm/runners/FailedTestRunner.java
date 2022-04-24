package com.bleuCrm.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)   //to run failed tests with junit
@CucumberOptions(
        plugin = {"html:target/failed-html-report"},
        features = "@target/rerun.txt",        // to bring failed test case/scenario
        glue = "com/bleuCrm/step_definitions"
)

public class FailedTestRunner {
}
