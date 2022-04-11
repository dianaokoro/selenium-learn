// Include the chrome driver
// require("chromedriver");
import "chromedriver";

//Include selenium webdriver
// let swd = require("selenium-webdriver");

import swd from "selenium-webdriver" 
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Get the credentials from the json file
//let {email, password} = require("./mycred/credentials.json");
import {email, password} from "./mycred/logincred.js";


export function LoginTest() {
    //step 1 - opening the oxfordvest sign in page
let tabToOpen = 
tab.get("https://dashboard.oxfordvest.com/login");
tabToOpen
.then(function () {
    
    //Timeout to wait if connection is slow
    let findTimeOutP =
        tab.manage().setTimeouts({
            implicit: 10000.  // 10seconds  
        }); 
        return findTimeOutP;     
})
  .then(function () {
       //step2 - finding the email input
       let promiseEmailBox =
           tab.findElement(swd.By.css("input[type='email']"));
           return promiseEmailBox;
  })
  .then(function (emailBox) {
      //step3 - Entering the Email
      let promiseFillEmail =
          emailBox.sendKeys(email);
          return promiseFillEmail;
  })
 .then(function () {
     console.log(
         "Email entered successfully in" +
         "'login demonstration' for oxfordvest"
     ); 

 //step4 finding the password input
 let promisePasswordBox =
    tab.findElement(swd.By.css("input[type='password"));
    return promisePasswordBox;
})

.then(function (passwordBox) {
    //step5 -entering the password
    let promiseFillPassword =
    passwordBox.sendKeys(password);
    return promiseFillPassword;
})
    .then(function () {
        console.log(
            "Password entered successfully in" +
            " 'login demonstration' for oxfordvest" 
        );
         
   // Step 6 - Finding the Sign In button
    let promiseSignInBtn = tab.findElement(
        swd.By.className("btn-sm filled-button")
    );
    return promiseSignInBtn;
})
.then(function (signInBtn) {

    // Step 7 - Clicking the Sign In button
    let promiseClickSignIn = signInBtn.click();
    return promiseClickSignIn;
})
.then(function () {
    console.log("Successfully signed in oxfordvest!");
})
.catch(function (err) {
    console.log("Error ", err, " occurred!");
});
}
