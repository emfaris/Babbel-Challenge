const Helper = function(){

    const ec = protractor.ExpectedConditions;
    
    //Wait for element to be present in DOM and is displayed
    this.waitUntilReady = function(elm){
        return browser.wait(ec.visibilityOf(elm), 20000);
    };

};

module.exports = Helper;