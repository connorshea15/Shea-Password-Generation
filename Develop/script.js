// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  var password = "";
  // Ask the user how long the password should be
  var passwordLength = window.prompt("How long would you like your password to be? (Between 8 and 128)");
  // make sure the input is good here 
   /* while (typeof passwordLength < 8 || passwordLength > 128) {
      window.alert("Please put a numberic value between 8 and 128");
    } */
    passwordLength = parseInt(passwordLength);
    for (i = 0; i < passwordLength; i++) {
      console.log(randomNumber());
      password += randomNumber();
    }
    window.alert("Your password is " + password);
  
  // Ask the user if they want lowercase characters included
  var lowerCaseConfirm = window.confirm("Would you like to include lower case characters in your password?");
  // Ask the user if they want uppercase characters included
  var upperCaseConfirm = window.confirm("Would you like to include upper case characters in your password?");
  // Ask the user if they want numbers included 
  var numericConfirm = window.confirm("Would you like to include numbers in your password?");
  // Ask the user if they want special characters included
  var specialCharacterConfirm = window.confirm("Would you like to include special characters in your password?");
  
  console.log(passwordLength);
  console.log(lowerCaseConfirm);
  console.log(upperCaseConfirm);
  console.log(numericConfirm);
  console.log(specialCharacterConfirm);

  //passwordText.value = password;

}

var checkInput = function() {


};

// function to create a random number between 0 and 9
var randomNumber = function () {
  return Math.floor(Math.random() * 10);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

