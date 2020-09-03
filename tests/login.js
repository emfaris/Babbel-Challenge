const HomePageActions = require("../page_actions/homepage_action")
const LoginPageObj = require("../page_objects/loginpage_obj")


describe('Login Tests', () => {
    
    const homePageActions = new HomePageActions();
    const loginPageObj = new LoginPageObj();

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
        //TO DO
    });

    it("Should successfully login user with valid credentials", function(){
        //TO DP
    });


});
