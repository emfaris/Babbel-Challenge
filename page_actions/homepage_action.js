const HomePageObj = require("../page_objects/homepage_obj")
const LoginPageObj = require("../page_objects/loginpage_obj")
const Help = require("../Util/helper")

const HomePageActions = function(){

    const homePageObj = new HomePageObj();
    const loginPageObj = new LoginPageObj();
    const help = new Help();
    
    //Navigating to Sign In page from Homepage
    this.goToSignInPage = function(){
        homePageObj.signInBtn.click();
        help.waitUntilReady(loginPageObj.loginForm);

    }
};
module.exports = HomePageActions;