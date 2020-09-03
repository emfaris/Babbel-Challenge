const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    directConnect: true,
    specs: ["tests/loginTests.js"],
    
    onPrepare: function(){
        jasmine.getEnv().clearReporters();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
               
        }));
      }
  
};
  