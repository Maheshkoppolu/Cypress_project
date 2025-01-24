export class gmailSelectors {
    createAccountLink_selectors = 'div[class="panel header"] > ul > li:nth-of-type(3) > a';
    newAccountPage_selectors = 'span[class="base"]';
    firstName_selectors = 'input[id="firstname"]';
    lastName_selectors = 'input[id="lastname"]';
    Gmail_selectors = 'input[id="email_address"]';
    Password_selectors = 'input[id="password"]';
    confirmPassword_selectors = 'input[id="password-confirmation"]';
    cerateAccountSubmitButton_selectors = 'button[class="action submit primary"]';
    successMessage_selectors = 'div[data-ui-id="message-success"]';
    signInLink_selectors = 'div[class="panel header"] > ul > li:nth-of-type(2) > a';
    customerLoginPage = 'span[data-ui-id="page-title-wrapper"]';
    logInGmail_selectors = 'input[id="email"]';
    logInPassword_selectors = 'input[name="login[password]"]';
    submitSignInButton_selectors = 'button[class="action login primary"]';
    homePage_selectors = 'span[data-ui-id="page-title-wrapper"]'
}