Feature: login
  @wip
  Scenario: user should be able to login
    When the user is on the login page
    And the user enters the credentials as a "Helpdesk"
    Then the title contains "Portal"
