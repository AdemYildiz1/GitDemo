Feature: login

  Scenario: user should be able to login
    Given the user is on the login page
    When the user enters the credentials as a "helpdesk"
    Then the title contains "Portal"
