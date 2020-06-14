// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var test = window.prompt("What's your favorite color?");
console.log(test);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
