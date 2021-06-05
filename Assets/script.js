// Assignment Code
var generateBtn = document.querySelector("#generate");

var symbols = "!@#$%^&*(){}[]-_+|:;'?/.,<=>`~".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
// Write password to the #password input

function generatePassword() {
  var pwArray = [];
  var pwChoices = [];
  let generatedPassword = "";
  let chosenLength = prompt("Choose a number between 8 and 128.");
  if (chosenLength < 8) {
    alert("Password must contain more characters");
    return "";
  }

  if (chosenLength > 128) {
    alert("Password must contain less characters");
    return "";
  }
  let allowSymbol = window.confirm(
    "Do you want your password to contain special characters?"
  );

  let allowNumber = window.confirm(
    "Do you want your password to contain numbers?"
  );

  let allowUpper = window.confirm(
    "Do you want your password to contain uppercase characters?"
  );

  let allowLower = window.confirm(
    "Do you want your password to contain lowercase characters?"
  );

  var allowable = [allowSymbol, allowNumber, allowUpper, allowLower];

  //if no types are allowed, return this code
  if (!allowable.includes(true)) {
    window.alert("Choose at least one type of character to use.");
    return "";
  }

  // If the user chooses to allow uppercase then run this code, adds uppercase char to possible type
  if (allowUpper === true) {
    pwChoices = pwChoices.concat(upper);
  }

  if (allowLower === true) {
    pwChoices = pwChoices.concat(lower);
  }

  if (allowNumber === true) {
    pwChoices = pwChoices.concat(numbers);
  }

  if (allowSymbol === true) {
    pwChoices = pwChoices.concat(symbols);
  }

  for (let i = 0; i < parseInt(chosenLength); i++) {
    pwArray += pwChoices[Math.floor(Math.random() * pwChoices.length)];
    password = pwArray;
  }
  return `Your new password is: ${password}`;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  const symbols = " !@#$%^&*(){}[]-_+|:;'?/.,<=>`~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// var small = "abcdefggkjhkf".split("");
