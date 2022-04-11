

// Include the chrome driver
import "chromedriver";

//Include selenium webdriver
import swd from "selenium-webdriver"
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Get the credentials from the json file
// import { email, password } from "./mycred/safewalletcred.js";


export function gmailtest() {
    // opening the oxfordvest sign in page
    let tabToOpen =
        tab.get("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
    tabToOpen
        .then(function () {

            //Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 10000.  // 10seconds  
                });
            return findTimeOutP;
        })
        


        // .then(function () {
        //     // finding the email input
        //     let promiseEmailBox =
        //         tab.findElement(swd.By.css("input[type='email']"));
        //     return promiseEmailBox;
        // })

        // .then(function (emailBox) {
        //     //step3 - Entering the Email
        //     let promiseFillEmail =
        //         emailBox.sendKeys(email);
        //     return promiseFillEmail;
        // })

        // .then(function () {
        //     console.log(
        //         "Email entered successfully in" +
        //         "'login demonstration' for safewallet"
        //     );

        //     //step4 finding the password input
        //     let promisePasswordBox = tab.findElement(swd.By.css("input[type='password"));
        //     return promisePasswordBox;
        // })

        // .then(function (passwordBox) {
        //     //step5 -entering the password
        //     let promiseFillPassword = passwordBox.sendKeys(password);
        //     return promiseFillPassword;
        // })
        // .then(function () {
        //     console.log(
        //         "Password entered successfully in" +
        //         " 'login demonstration' for safewallet"
        //     );
        //     // Step 6 - Finding the Sign In button
        //     let promiseSignInBtn = tab.findElement(
        //         swd.By.className("btn btn-danger button_bold")
        //     );
        //     return promiseSignInBtn;
        // })
        // .then(function (signInBtn) {

        //     // Step 7 - Clicking the Sign In button
        //     let promiseClickSignIn = signInBtn.click();
        //     return promiseClickSignIn;
        // })
        // .then(function () {
        //     console.log("Successfully signed in safewallet!");
        // })
        .catch(function (err) {
            console.log("Error ", err, " occurred!");
        });
}