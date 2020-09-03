const { browser } = require("protractor")

describe('Login Tests', () => {
    
    beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get("https://zero.webappsecurity.com/");
    });

    it("Should navigate to login page", function(){
       //TO DO
    })
    
    it("Should deny login with invalid credentials", function(){
        //TO DO
    })

    it("Should successfully login user with valid credentials", function(){
        //TO DP
    })


});
