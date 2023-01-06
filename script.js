// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var lengthofpassword;
var uppercase;
var lowercase;
var numeric;
var specials;
// Function to prompt user for password options
function getPasswordOptions() {
 
  lengthofpassword=prompt("Choose password character length (10-64characters): ")
  uppercase=confirm("Uppercase?");
  lowercase=confirm("Lowercase?");
  numeric=confirm("Numeric?");
  specials=confirm("Special Characters?");
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  
    return arr[Math.floor(Math.random() * arr.length)];
  
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.log(lengthofpassword);
  console.log(uppercase);
  console.log(lowercase);
  console.log(numeric);
  console.log(specials);
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
console.log(getRandom(upperCasedCharacters));