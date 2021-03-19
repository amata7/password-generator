// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwArray = [];
var pwChoices = [];
var symbols = " !@#$%^&*(){}[]-_+|:;'?/.,<=>`~".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
// Write password to the #password input

function generatePassword() {
  
  let generatedPassword = "";
  let chosenLength = prompt("Choose a number between 8 and 128.");
    if (chosenLength < 8) {
      alert('Password must contain more charcters')
      return "";
    }

    if (chosenLength > 128) {
      alert('Password must contain less charcters')
      return "";
    }
  let alertLength = alert('Your password will be ' + chosenLength + ' characters long.');

  let allowSymbol = window.confirm("Do you want your password to contain special characters?");

  let allowNumber = window.confirm("Do you want your password to contain numbers?");

  let allowUpper = window.confirm("Do you want your password to contain uppercase characters?");

  let allowLower = window.confirm("Do you want your password to contain lowercase characters?");

  var allowable = [allowSymbol, allowNumber, allowUpper, allowLower];  
  // var allowableNum = allowSymbol + allowNumber + allowUpper + allowLower;
  // var charTypes = [{allowLower}, {allowUpper}, {allowNumber}, {allowSymbol}].filter(item => Object.values(item)[0]);

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


    console.log(pwChoices);
    console.log(typeof pwChoices);
return "Password";
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
  const symbols = " !@#$%^&*(){}[]-_+|:;'?/.,<=>`~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// var small = "abcdefggkjhkf".split("");