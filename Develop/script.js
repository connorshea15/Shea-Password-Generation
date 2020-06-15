// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // initialize empty string which will hold our password
  var password = "";
  var passwordNumber = "";
  // Ask the user how long the password should be
  passwordNumber = checkInput();
  
  // Ask the user if they want lowercase characters included
  var lowerCaseConfirm = window.confirm("Would you like to include lower case characters in your password?");
  // Ask the user if they want uppercase characters included
  var upperCaseConfirm = window.confirm("Would you like to include upper case characters in your password?");
  // Ask the user if they want numbers included 
  var numericConfirm = window.confirm("Would you like to include numbers in your password?");
  // Ask the user if they want special characters included
  var specialCharacterConfirm = window.confirm("Would you like to include special characters in your password?");
  
  // initialize a string that will hold all possible characters
  acceptableCharacters = "";
  if (lowerCaseConfirm) {
    acceptableCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  // check for upper case confirmation
  if (upperCaseConfirm) {
    acceptableCharacters += acceptableCharacters.toUpperCase();
  }
  // check for numeric confirmation
  if (numericConfirm){
    acceptableCharacters += "1234567890";
  }
  // check for upper special character confirmation
  if (specialCharacterConfirm){
    acceptableCharacters += specialCharacterString();
  }

 // Condition to start over if there are no acceptable characters defined by the user
  if (!specialCharacterConfirm && !numericConfirm && !upperCaseConfirm && !lowerCaseConfirm) {
    window.alert("You must select at least one type of character.");
    writePassword();
  } 

  // populate our password string by randomly selecting from a string full of our acceptable characters
  for (i = 0; i < passwordNumber; i++) {
    password += acceptableCharacters[Math.floor(Math.random() * acceptableCharacters.length)];
  }

  // Show them the password with a window alert
  window.alert("Your password is " + password);
} 

// function to ensure user input about length of password will work
var checkInput = function() {
  var passwordLength = window.prompt("How long would you like your password to be? (Between 8 and 128)");
  // make sure the input is good here 
  // Turn that string user input into an integer
  passwordLength = parseInt(passwordLength);
  if (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128)  {
    window.alert("Put in a value between 8 and 128.");
    checkInput();
  } else return passwordLength;
};

//create string of special characters
var specialCharacterString = function () {
  var specialCharacters = "";
  for (i = 32; i < 48; i++) {
    specialCharacters += String.fromCharCode(i);
  }
  return specialCharacters;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);