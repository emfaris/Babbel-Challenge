const LoginPage = function () {

    //Login form 
    this.loginForm = element(by.id("login_form"));
  
    this.username = element(by.xpath(".//input[@id ='user_login']"));
    this.password = element(by.xpath(".//input[@id = 'user_password']"));
    this.submitBtn = element(by.name("submit"));
  
    //Alert
    this.loginAlert = element(by.xpath(".//div[@class='alert alert-error' and contains(text(),'Login and/or password are wrong')]"));
  };

module.exports = LoginPage;
  