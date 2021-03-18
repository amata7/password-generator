// Assignment Code
var generateBtn = document.querySelector("#generate");

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

const  random = {
  lower:randomLow,
  upper:randomUp,
  number:randomNum,
  symbol:randomSymbol
}

// Write password to the #password input
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

function generatePassword() {
  let chosenLength = prompt("Choose a number between 8 and 128.");
  if (chosenLength > 7 && chosenLength < 129) {
    let alertLength = alert('Your password will be ' + chosenLength + ' characters long.');
    let allowSymbol = window.confirm("Do you want your password to contain special characters?");
    allowSymbol.type = "boolean"

    let allowNumber = window.confirm("Do you want your password to contain numbers?");
    allowNumber.type = "boolean"

    let allowUpper = window.confirm("Do you want your password to contain uppercase characters?");
    allowUpper.type = "boolean"

    let allowLower = window.confirm("Do you want your password to contain lowercase characters?");
    allowLower.type = "boolean"

    var allowable = [allowSymbol, allowNumber, allowUpper, allowLower];   

    console.log(allowable);
    console.log(allowSymbol);
    console.log(allowNumber);
    console.log(allowUpper);
    console.log(allowLower);
    //The below code does not work as intended, needs some more work
    if (allowSymbol = "true") {
      
      window.alert("You got to this point");
    }
    else {
      window.alert("Please choose at least one character type");
    return;
    }
  }
  else {
    window.alert("Please choose a valid number");
    return;
  }

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);