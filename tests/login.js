const HomePageActions = require("../page_actions/homepage_action");
const { browser } = require("protractor");

describe('Login Tests', () => {
    
    const homePageActions = new HomePageActions();

    beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get("http://zero.webappsecurity.com/");
    
    });

    it("Should navigate to login page", function(){
       homePageActions.goToSignInPage();
       
    })
    
    it("Should deny login with invalid credentials", function(){
        //TO DO
    })

    it("Should successfully login user with valid credentials", function(){
        //TO DP
    })


});
