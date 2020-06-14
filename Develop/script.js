// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  // Ask the user how long the password should be
  var passwordNumber = checkInput();
  
  // Ask the user if they want lowercase characters included
  var lowerCaseConfirm = window.confirm("Would you like to include lower case characters in your password?");
  // Ask the user if they want uppercase characters included
  var upperCaseConfirm = window.confirm("Would you like to include upper case characters in your password?");
  // Ask the user if they want numbers included 
  var numericConfirm = window.confirm("Would you like to include numbers in your password?");
  // Ask the user if they want special characters included
  var specialCharacterConfirm = window.confirm("Would you like to include special characters in your password?");
  
  // iterate through concatenating the password 
  for (i = 0; i < passwordNumber; i) {
    // Check for lower case confirmation
    if (lowerCaseConfirm) {
      password += randomLetter().toLowerCase();
      i++;
    }
    // check for upper case confirmation
    if (upperCaseConfirm) {
      password += randomLetter();
      i++
    }
    // check for numeric confirmation
    if (numericConfirm){
      password += randomNumber();
      i++;
    }
    // check for upper special character confirmation
    if (specialCharacterConfirm){
      password += randomSpecialCharacter();
      i++;
    }
    // start writePassword function over if no characters were selected
    else if (!specialCharacterConfirm && !numericConfirm && !upperCaseConfirm && !lowerCaseConfirm) {
      window.alert("You must select at least one type of character.");
      writePassword();
    }
  }
  // Have to make a correction here to slice off any string elements over the length specified by the user
  if (i > passwordNumber) {
    password = password.slice(0, passwordNumber);
  }
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

// function to create a random number between 0 and 9
var randomNumber = function () {
  return Math.floor(Math.random() * 10);
};
// function to create a random letter
var randomLetter = function() {
  return String.fromCharCode(Math.floor((Math.random() * 25) + 65));
};
// function to create a random special character
var randomSpecialCharacter = function() {
  return String.fromCharCode(Math.floor((Math.random() * 16) + 32));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

