## Overview
A complete test architecture using Protractor with Jasmine framework. 
Folder structure has been setup in a way to expand the solution without digging into every folder and file. 
Files & folders have been named according to their functionality/purpose. 

## Installation
1. Simply clone the repository
2. Open the terminal, cd into the directory and type 'npm install'. It will fetch and download all the dependencies. 

## Running the solution
1. Open the terminal, cd into the directory and type 'protractor conf.js'.
2. Watch the browser (default: chrome) window opens and performs the test.
3. Test report will be visible in the terminal window. 

## Frameworks/Tools
This solution is built using Protractor which is built on top of WebDriverJS. Specifically built for angular applications, but can be used for non-angular applications as well. 
It is not the fastest but still a pretty fast framework.  
Another reason being, how easy it is to setup and get the tests running in no time. 
It comes default with Jasmine framework which has its own set of assertions, it works well and easy to understand and read the code. 

## Pattern: Page Object Model
So we have here a whole directory which just consists of page objects related to specific pages (Page Factory), which is done in order to keep it simple and easy to understand. 
These objects are utilized in the 'Actions' directory which consists of (as the name implies) actions related to specific pages and also in the tests as well.

So we have a bunch of actions which we can easily re-use if needed. 
Coming towards to the TEST: It’s a good practice to have just 'expectations' in your tests. 
Everything else is encapsulated. 
Very easy to read and maintain.

