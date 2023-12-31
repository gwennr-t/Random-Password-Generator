// Assignment code here

//Password variable arrays
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "`", "{", "}", "|", "~",];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    console.log(writePassword);
  
    promptUser();
   
    var passwordText = document.querySelector("#password");
    var randomPassword = generatePassword();
  
    passwordText.value = randomPassword;
  }
  
  //Prompt the user for password criteria
  function promptUser() {
    console.log(promptUser);
  
  // password length variable & validation
    characterArray = [];
    passwordLength = parseInt(prompt("Enter a number between 8 and 128 for desired password length."));
  
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Enter a number between 8 and 128 for desired password length.");
      return false;
    } 
  
  //   lowercase, uppercase, number, and special characters variables and validation
    if (confirm("Do you want your password to include lowercase letters?")) {
      characterArray = characterArray.concat(lowerCaseCharacters);
    };
    if (confirm("Do you want your password to include uppercase letters?")) {
      characterArray = characterArray.concat(upperCaseCharacters);
    };
    if (confirm("Do you want your password to include numbers?")) {
      characterArray = characterArray.concat(numericCharacters);
    };
    if (confirm("Do you want your password to include special characters?")) {
      characterArray = characterArray.concat(specialCharacters);
    };
    return true;
  }  

//Generate password based on criteria
function generatePassword() {
    console.log("clicked generate password");
  
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterArray.length);
      password = password + characterArray[randomIndex];
    }
    return password;
  }