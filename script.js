// assigning variables for button and each criteria
var generateBtn = document.querySelector("#generate");
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
var upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberValues = "0123456789";
var specialCharacterValues = " !#$%&'()*+,-\"./:;<=>?@[]^_`{|}~";

//defining the right password function
function writePassword() {
  //calling generatePassword function and assign it to the variable password
  var password = generatePassword();
  // selecting the form field and assigning it to the passwordText variable
  var passwordText = document.querySelector("#password");
  // assigning variable for user input for password criteria
  var lowerCase = confirm(
    "Would you like to include lower case letters in your password:  ok or cancel"
  );
  var upperCase = confirm(
    "Would you like to include upper case letters in your password:  ok or cancel"
  );
  var numericValue = confirm(
    "Would you like to include numbers in your password:  ok or cancel"
  );
  var specialChar = confirm(
    "Would you like to include special characters in your password:  ok or cancel"
  );
  var passwordLength = Number(
    prompt("Would you please pick a length between 8 and 128 characters?")
  );
  // checking and validating if the password length criteria is met
  if (passwordLength < 8 && passwordLength > 128) {
    passwordLength = Number(
      prompt("Would you please pick a length between 8 and 128 characters?")
    );
  }
  //validating at least one of the password criteria is selected before generating password
  if (lowerCase || upperCase || numericValue || specialChar) {
    var password = generatePassword(
      passwordLength,
      lowerCase,
      upperCase,
      numericValue,
      specialChar
    );
  } else {
    // if no criteria is selected the first time, we will ask the questions again
    alert("please select one or more of the password criteria");
    lowerCase = confirm(
      "Would you like to include lower case letters in your password:  ok or cancel"
    );
    upperCase = confirm(
      "Would you like to include upper case letters in your password:  ok or cancel"
    );
    numericValue = confirm(
      "Would you like to include numbers in your password:  ok or cancel"
    );
    specialChar = confirm(
      "Would you like to include special characters in your password:  ok or cancel"
    );
  }
  //assigning the generated password value to the form field to be displayed
  passwordText.value = password;

  //creating a function that returns an array of random characters based on the password criteria selected
}
function setCharacters(lowerCase, upperCase, numericValue, specialChar) {
  var passwordChars = [];

  if (lowerCase) {
    passwordChars.push(
      lowerCaseValues[Math.floor(Math.random() * lowerCaseValues.length)]
    );
  }
  if (upperCase) {
    passwordChars.push(
      upperCaseValues[Math.floor(Math.random() * upperCaseValues.length)]
    );
  }
  if (numericValue) {
    passwordChars.push(
      numberValues[Math.floor(Math.random() * numberValues.length)]
    );
  }
  if (specialChar) {
    passwordChars.push(
      specialCharacterValues[
        Math.floor(Math.random() * specialCharacterValues.length)
      ]
    );
  }
  return passwordChars;
}
// creating a function for random password generator using the password length and random array from above
function generatePassword(
  passwordLength,
  lowerCase,
  upperCase,
  numericValue,
  specialChar
) {
  var finalPassword = "";
  for (i = 0; i < passwordLength; i++) {
    var finalPasswordCharacters = setCharacters(
      lowerCase,
      upperCase,
      numericValue,
      specialChar
    );
    finalPassword +=
      finalPasswordCharacters[
        Math.floor(Math.random() * finalPasswordCharacters.length)
      ];
  }
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
