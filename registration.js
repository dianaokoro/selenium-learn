// Include the chrome driver
import "chromedriver";

//Include selenium webdriver
import swd from "selenium-webdriver" 
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Get the credentials from the json file
import {firstName, lastName, email, phone, dateofBirth, country, gender, password, accountManagersCode} from "./mycred/regcred.js";

export function oxfordVestRegTest() {
    // opening the oxfordvest register in page
let tabToOpen = 
tab.get("https://oxfordvest.netlify.app/register");
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
    //step2 - finding the firstname input
    let promiseFirstNameBox =
        tab.findElement(swd.By.css("#firstName"));
        return promiseFirstNameBox;
})
.then(function (firstNameBox) {
   //step3 - Entering the firstname
   let promiseFillFirstName =
       firstNameBox.sendKeys(firstName);
       return promiseFillFirstName;
})
.then(function () {
  console.log(
      "firstName entered successfully in" +
      "'signUp demonstration' for oxfordvest"
  );
   //step4 finding the lastname input
 let promiseLastNameBox =
 tab.findElement(swd.By.css("#lastName"));
 return promiseLastNameBox;
})

.then(function (lastNameBox) {
 //step5 -entering the lastName
 let promiseFillLastName =
 lastNameBox.sendKeys(lastName);
 return promiseFillLastName;
})
 .then(function () {
     console.log(
         "lastName entered successfully in" +
         " 'signup demonstration' for oxfordvest" 
     );
      // finding the email input
 let promiseEmailBox =
 tab.findElement(swd.By.css("#account_email"));
 return promiseEmailBox;
})

.then(function (emailBox) {
 // entering the email
 let promiseFillEmail =
 emailBox.sendKeys(email);
 return promiseFillEmail;
})
 .then(function() {
     //step4 finding the phone input
    let promisePhoneBox =
       tab.findElement(swd.By.css("#phone_number"));
       return promisePhoneBox;
   })
   
   .then(function (phoneBox) {
       //step5 -entering the phone
       let promiseFillPhone =
       phoneBox.sendKeys(phone);
       return promiseFillPhone;
   })
       .then(function () {
           console.log(
               "phone entered successfully in" +
               " 'signup demonstration' for oxfordvest" 
            );

      //step4 finding the DateOfBirth input
 let promiseDateOfBirthBox =
 tab.findElement(swd.By.css("#dob"));
 return promiseDateOfBirthBox;
})

.then(function (dateOfBirthBox) {
 //step5 -entering the DateOfBirth
 let promiseFillDateOfBirth =
 dateOfBirthBox.sendKeys(dateofBirth);
 return promiseFillDateOfBirth;
})
 .then(function () {
     console.log(
         "DateOfBirth entered successfully in" +
         " 'SignUp demonstration' for oxfordvest" 
     );

      //step4 finding the Country input
 let promiseCountryBox =
 tab.findElement(swd.By.css("#country"));
 return promiseCountryBox;
})

.then(function (countryBox) {
 //step5 -entering the country
 let promiseFillCountry =
 countryBox.sendKeys(country);
 return promiseFillCountry;
})
 .then(function () {
     console.log(
         "country entered successfully in" +
         " 'signup demonstration' for oxfordvest" 
     );

           //step4 finding the gender input
 let promiseGenderBox =
 tab.findElement(swd.By.css("#gender"));
 return promiseGenderBox;
})

.then(function (genderBox) {
 //step5 -entering the gender
 let promiseFillGender =
 genderBox.sendKeys(gender);
 return promiseFillGender;
})
 .then(function () {
     console.log(
         "gender entered successfully in" +
         " 'signup demonstration' for oxfordvest" 
     );

                //step4 finding the password input
 let promisePasswordBox =
 tab.findElement(swd.By.css("#password"));
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
         "password entered successfully in" +
         " 'signUp demonstration' for oxfordvest" 
     );

                //step4 finding the account managers code input
 let promiseAccountManagementCodeBox =
 tab.findElement(swd.By.css("#accountManager"));
 return promiseAccountManagementCodeBox;
})

.then(function (accountManagersCodeBox) {
 //step5 -entering the account managers code
 let promiseFillAccountManagersCode =
 accountManagersCodeBox.sendKeys(accountManagersCode);
 return promiseFillAccountManagersCode;
})
 .then(function () {
     console.log(
         "accountManagersCode entered successfully in" +
         " 'signup demonstration' for oxfordvest" 
     );

        // Step 6 - Finding submit button
    let promiseSubmitBtn = tab.findElement(
        swd.By.className("btn-sm filled-button")
    );
    return promiseSubmitBtn;
})
.then(function (submitBtn) {

    // Step 7 - Clicking the Submit button
    let promiseClickSubmit = submitBtn.click();
    return promiseClickSubmit;
})
.then(function () {
    console.log("Successfully registerd on oxfordvest!");
})
.catch(function (err) {
    console.log("Error ", err, " occurred!");
});
}



     


