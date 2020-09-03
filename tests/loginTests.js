const HomePageActions = require("../page_actions/homepage_action")
const LoginPageActions = require("../page_actions/loginpage_action")
const LoginPageObj = require("../page_objects/loginpage_obj")
const AccountPageObj = require("../page_objects/accountpage_obj")

describe('Login Tests', () => {
    
    const homePageActions = new HomePageActions();
    const loginPageActions = new LoginPageActions();
    const loginPageObj = new LoginPageObj();
    const accountPageObj = new AccountPageObj();

    beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get("http://zero.webappsecurity.com/");
    
    });

    it("Should navigate to login page", function(){
       homePageActions.goToSignInPage();
       expect(protractor.ExpectedConditions.visibilityOf(loginPageObj.loginForm)).toBeTruthy();
       
    });
    
    it("Should deny login with invalid credentials", function(){
        loginPageActions.invalidLogin();
        expect(loginPageObj.loginAlert.getText()).toEqual("Login and/or password are wrong.");
    });

    it("Should successfully login user with valid credentials", function(){
        loginPageActions.validLogin();
        expect(browser.driver.getCurrentUrl()).toContain('account-summary.html');
    });


});
