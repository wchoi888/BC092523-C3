// Selecting the generate button element from the HTML
var generateBtn = document.querySelector("#generate");

// Defining character sets for different criteria
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
var upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberValues = "0123456789";
var specialCharacterValues = " !#$%&'()*+,-\"./:;<=>?@[]^_`{|}~";

// Defining function to write password
function writePassword() {
  // Defining variables for password criteria and length
  var criteriaParams = selectCriteria();
  var length = genPwdLen();

  // Defining variable to generate password based on password criteria and length
  var password = generatePassword(criteriaParams, length);

  // Defining variable to display password in the text field
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Defining function to prompt user for criteria selection and return validation for criteria
function selectCriteria() {
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
  return criteriaValidation(lowerCase, upperCase, numericValue, specialChar);
}

// Defining function to prompt user for password length and return password length once validated
function genPwdLen() {
  var passwordLength = Number(
    prompt("Would you please pick a length between 8 and 128 characters?")
  );
  return passwordLengthValidation(passwordLength);
}

// Defining function to validate password criteria selection
function criteriaValidation(lower, upper, numeric, special) {
  var criteria = [lower, upper, numeric, special];

  // If no criteria are selected, prompt again
  if (!(lower || upper || numeric || special)) {
    alert("Please select at least one password criteria");
    return selectCriteria();
  }
  return criteria;
}
//Defining function to validate password length

function passwordLengthValidation(passwordLength) {
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please select a valid password length between 8 and 128");
    return genPwdLen();
  }
  return passwordLength;
}

// Defining function to randomly select characters based on criteria
function setCharacters(params) {
  var passwordChars = [];

  if (params[0]) {
    passwordChars.push(
      lowerCaseValues[Math.floor(Math.random() * lowerCaseValues.length)]
    );
  }
  if (params[1]) {
    passwordChars.push(
      upperCaseValues[Math.floor(Math.random() * upperCaseValues.length)]
    );
  }
  if (params[2]) {
    passwordChars.push(
      numberValues[Math.floor(Math.random() * numberValues.length)]
    );
  }
  if (params[3]) {
    passwordChars.push(
      specialCharacterValues[
        Math.floor(Math.random() * specialCharacterValues.length)
      ]
    );
  }

  return passwordChars;
}

// Defining function to generate the password
function generatePassword(params, length) {
  var finalPassword = "";

  for (i = 0; i < length; i++) {
    var finalPasswordCharacters = setCharacters(params);
    finalPassword +=
      finalPasswordCharacters[
        Math.floor(Math.random() * finalPasswordCharacters.length)
      ];
  }
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
