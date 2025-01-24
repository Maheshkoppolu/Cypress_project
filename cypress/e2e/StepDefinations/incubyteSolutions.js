import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { gmailSelectors } from '../Selectors/incubyteSolutions';

var gmail_Selectors = new gmailSelectors();

Given('I visit the Home Page', () => {
    cy.fixture('data').then((Website) =>{
        cy.visit(Website.url);
    })
});

When('I click on Create an account link', () => {
    cy.get(gmail_Selectors.createAccountLink_selectors).click();

});

Then('I should redirect to Create New Account Page', () => {
        cy.get(gmail_Selectors.newAccountPage_selectors)
            .should('have.text', 'Create New Customer Account');
})

When('I enter Fname {string}', (Fname) => {
    cy.get(gmail_Selectors.firstName_selectors).clear().type(Fname);
});

And('I enter Lname {string}', (Lname) => {
    cy.get(gmail_Selectors.lastName_selectors).clear().type(Lname);
});

And('I enter Gmail {string}', (Gmail) => {
    cy.get(gmail_Selectors.Gmail_selectors).clear().type(Gmail);
});

And('I enter Password {string}', (Password) => {
    cy.get(gmail_Selectors.Password_selectors).clear().type(Password);
});

And('I enter ConfirmPassword {string}', (ConfirmPassword) => {
    cy.get(gmail_Selectors.confirmPassword_selectors).clear().type(ConfirmPassword);
});

And('I click on Create an account button', () => {
    cy.get(gmail_Selectors.cerateAccountSubmitButton_selectors).click();
});

Then('I Should see Success message', () => {
    cy.get(gmail_Selectors.successMessage_selectors)
        .should('contain.text', 'Thank you for registering with Main Website Store.');
});


When('I click on sign in link', () => {
    cy.get(gmail_Selectors.signInLink_selectors).click();
});

Then('I should redirect to Customer Login Page', () => {
    cy.get(gmail_Selectors.customerLoginPage)
        .should('have.text', 'Customer Login');
});

When('I enter login Email {string}', (email) => {
    cy.get(gmail_Selectors.logInGmail_selectors).type(email);
});

And('I enter login Password {string}', (password) => {
    cy.get('input[name="login[password]"]').type(password);
});

And('I click on sign in button', () => {
    cy.get(gmail_Selectors.submitSignInButton_selectors).click();
});

Then('I should See Home Page', () => {
        cy.get(gmail_Selectors.homePage_selectors)
            .should('contain', 'Home Page');
});