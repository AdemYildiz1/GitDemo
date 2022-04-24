$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user should be able to login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the title contains \"Portal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/search.feature");
formatter.feature({
  "name": "Filter and Search",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See default filters",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user should see following default filters",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_following_default_filters(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.step({
  "name": "the user selects the \"\u003cfieldType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see the title of field as a \"\u003cfieldName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fieldType",
        "fieldName"
      ]
    },
    {
      "cells": [
        "Date",
        "Date"
      ]
    },
    {
      "cells": [
        "Type",
        "Type"
      ]
    },
    {
      "cells": [
        "Author",
        "Author"
      ]
    },
    {
      "cells": [
        "To",
        "To"
      ]
    },
    {
      "cells": [
        "Favorites",
        "Favorites"
      ]
    },
    {
      "cells": [
        "Tag",
        "Tag"
      ]
    },
    {
      "cells": [
        "Extranet",
        "Extranet"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"Date\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see the title of field as a \"Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_the_title_of_field_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"Type\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see the title of field as a \"Type\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_the_title_of_field_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"Author\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see the title of field as a \"Author\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_the_title_of_field_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"To\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see the title of field as a \"To\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_the_title_of_field_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"Favorites\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see the title of field as a \"Favorites\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_the_title_of_field_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"Tag\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see the title of field as a \"Tag\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_the_title_of_field_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "See the added fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"Extranet\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see the title of field as a \"Extranet\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_should_see_the_title_of_field_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the credentials as a \"helpdesk\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.LoginStepDefs.the_user_enters_the_credentials_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the filter and search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "remove the added fields that are default",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user clicks the add field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_clicks_the_add_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user selects the \"Date\" to remove",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCrm.step_definitions.searchFilterDefs.the_user_selects_the_to_remove(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should NOT be able to click",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});