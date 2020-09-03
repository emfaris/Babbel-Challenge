const HomePageObj = require("../page_objects/homepage_obj");

const HomePageActions = function(){

    const homePageObj = new HomePageObj();
    
    //Navigating to Sign In page from Homepage
    this.goToSignInPage = function(){
        homePageObj.signInBtn.click();

    }
};
module.exports = HomePageActions;