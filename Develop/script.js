// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  
  // Ask the user how long the password should be
  var passwordLength = window.prompt("How long would you like your password to be? (Between 8 and 128)");
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

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
