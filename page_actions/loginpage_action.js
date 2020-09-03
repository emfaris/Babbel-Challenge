const LoginPageObj = require("../page_objects/loginpage_obj")
const AccountPageObj = require("../page_objects/accountpage_obj")
const Help = require("../Util/helper")

const LoginPageActions = function(){
  
    const loginPageObj = new LoginPageObj();
    const accountPageObj = new AccountPageObj();
    const help = new Help();

    this.invalidLogin = function(){
        loginPageObj.username.sendKeys("invalid_user");
        loginPageObj.password.sendKeys("123123");
        loginPageObj.submitBtn.click();

        help.waitUntilReady(loginPageObj.loginAlert);
    };

    this.validLogin = function(){
        loginPageObj.username.sendKeys("username");
        loginPageObj.password.sendKeys("password");
        loginPageObj.submitBtn.click();

        help.waitUntilReady(accountPageObj.accountSummaryMenuItem);

    };
};
module.exports = LoginPageActions;