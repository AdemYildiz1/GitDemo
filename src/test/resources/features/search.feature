Feature: Filter and Search


  Background:
    Given the user is on the login page
    And the user enters the credentials as a "helpdesk"
    When the user clicks the filter and search box


  Scenario: See default filters
    Then the user should see following default filters
      | my activity   |
      | work          |
      | favorite      |
      | announcements |
      | workflows     |


  Scenario Outline: See the added fields
    And the user clicks the add field
    And the user selects the "<fieldType>"
    Then the user should see the title of field as a "<fieldName>"
    Examples:
      | fieldType | fieldName |
      | Date      | Date      |
      | Type      | Type      |
      | Author    | Author    |
      | To        | To        |
      | Favorites | Favorites |
      | Tag       | Tag       |
      | Extranet  | Extranet  |

  @wip
  Scenario: remove the added fields that are default
    And the user clicks the add field
    And the user selects the "Date" to remove
    Then the user should NOT be able to click

#    Examples:
#      | fieldType | fieldNamebox |
#      | Date      | Date         |
#      | Type      | Type         |
#      | Author    | Author       |
#      | To        | To           |
#      | Favorites | Favorites    |
#      | Tag       | Tag          |
#      | Extranet  | Extranet     |


#  Scenario: User should be able to search by selecting Date
#    And the user clicks "Date" dropdown box
#    And the user select the "date options"
#    And th user click search to submit
#    Then user should see "date options" selected on the main serach box
