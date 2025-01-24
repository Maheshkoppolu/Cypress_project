Feature: Sign into the account
  As a user, I want to create and log in to the account.

  Scenario Outline: User creates an account
    Given I visit the Home Page
    When I click on Create an account link
    Then I should redirect to Create New Account Page
    When I enter Fname '<Fname>'
    And I enter Lname '<Lname>'
    And I enter Gmail '<Gmail>'
    And I enter Password '<Password>'
    And I enter ConfirmPassword '<ConfirmPassword>'
    And I click on Create an account button
    Then I Should see Success message

    Examples:
        |Fname     | Lname  | Gmail                  | Password    | ConfirmPassword|
        |Koppolu   | Rajesh | k.rajesh.1234@gmail.com | Rajesh1234  | Rajesh1234     |

  Scenario: User log into the account
    Given I visit the Home Page
    When I click on sign in link
    Then I should redirect to Customer Login Page
    When I enter login Email 'k.rajesh.1234@gmail.com'
    And I enter login Password 'Rajesh1234'
    And I click on sign in button
    Then I should See Home Page