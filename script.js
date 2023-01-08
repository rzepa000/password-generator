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
  parseInt(lengthofpassword)
  if(lengthofpassword >=10 && lengthofpassword <=64){
    uppercase=confirm("Uppercase?");
    lowercase=confirm("Lowercase?");
    numeric=confirm("Numeric?");
    specials=confirm("Special Characters?");
    if(uppercase === false && lowercase===false && numeric===false && specials===false ){
        alert("Sorry! You must choose at least one type of characteritics")
        return getPasswordOptions();
    }
    
  }else{
    alert("Sorry!You must choose a number beetwen 10 and 64")
    return getPasswordOptions();
  }
  
  
}

// Function for getting a random element from an array
var char=function getRandom(arr) {
  
    return arr[Math.floor(Math.random() * arr.length)];
  
}

// Function to generate password with user input
var passwordarr=[];
function generatePassword() {
  
 for(var i=0;i<lengthofpassword;i++){

  if(uppercase === true && lowercase===true && numeric===true && specials===true){
    var fourchars=Math.floor(Math.random() * 4);  
    switch(fourchars) {
        case 0:
        passwordarr[i]=char(upperCasedCharacters);
        
          break;
        case 1:
        passwordarr[i]=char(lowerCasedCharacters)
          
          break;
        case 2:
          passwordarr[i]=char(specialCharacters)
          
        break;
        case 3:
          passwordarr[i]=char(numericCharacters)
        
        break;
       } 
    }else if(uppercase===false && lowercase===true && numeric===true && specials===true){
      var threechars=Math.floor(Math.random() *3 ); 
      switch(threechars) {
          case 0:
          passwordarr[i]=char(numericCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(lowerCasedCharacters)
            
            break;
          case 2:
            passwordarr[i]=char(specialCharacters)
            
          break;
          
         } 
    }else if(uppercase === true && lowercase===false && numeric===true && specials===true){
      var threechars=Math.floor(Math.random() *3 ); 
      switch(threechars) {
          case 0:
          passwordarr[i]=char(numericCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(upperCasedCharacters)
            
            break;
          case 2:
            passwordarr[i]=char(specialCharacters)
            
          break;
          
         } 
    }else if(uppercase === true && lowercase===true && numeric===false && specials===true){
      var threechars=Math.floor(Math.random() *3 ); 
      switch(threechars) {
          case 0:
          passwordarr[i]=char(upperCasedCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(lowerCasedCharacters)
            
            break;
          case 2:
            passwordarr[i]=char(specialCharacters)
            
          break;
          
         } 
    }else if(uppercase === true && lowercase===true && numeric===true && specials===false){
      var threechars=Math.floor(Math.random() *3 ); 
      switch(threechars) {
          case 0:
          passwordarr[i]=char(numericCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(lowerCasedCharacters)
            
            break;
          case 2:
            passwordarr[i]=char(upperCasedCharacters)
            
          break;
          
         } 
    }else if(uppercase === true && lowercase===true && numeric===false && specials===false){
      var twochars=Math.floor(Math.random() *2 ); 
      switch(twochars) {
          case 0:
          passwordarr[i]=char(upperCasedCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(lowerCasedCharacters)
            
            break;
          
          
         } 
    }else if(uppercase === true && lowercase===false && numeric===true && specials===false){
      var twochars=Math.floor(Math.random() *2 ); 
      switch(twochars) {
          case 0:
          passwordarr[i]=char(upperCasedCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(numericCharacters)
            
            break;
          
          
         } 
    }else if(uppercase === true && lowercase===false && numeric===false && specials===true){
      var twochars=Math.floor(Math.random() *2 ); 
      switch(twochars) {
          case 0:
          passwordarr[i]=char(upperCasedCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(specialCharacters)
            
            break;
          
          
         } 
    }else if(uppercase === false && lowercase===true && numeric===true && specials===false){
      var twochars=Math.floor(Math.random() *2 ); 
      switch(twochars) {
          case 0:
          passwordarr[i]=char(lowerCasedCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(numericCharacters)
            
            break;
          
          
         } 
    }else if(uppercase === false && lowercase===true && numeric===false && specials===true){
      var twochars=Math.floor(Math.random() *2 ); 
      switch(twochars) {
          case 0:
          passwordarr[i]=char(lowerCasedCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(specialCharacters)
            
            break;
          
          
         } 
    }else if(uppercase === false && lowercase===false && numeric===true && specials===true){
      var twochars=Math.floor(Math.random() *2 ); 
      switch(twochars) {
          case 0:
          passwordarr[i]=char(numericCharacters)
          
            break;
          case 1:
          passwordarr[i]=char(specialCharacters)
            
            break;
          
          
         } 
    }else if(uppercase === true && lowercase===false && numeric===false && specials===false){
          passwordarr[i]=char(upperCasedCharacters)
    }else if(uppercase === false && lowercase===true && numeric===false && specials===false){
          passwordarr[i]=char(lowerCasedCharacters)
    }else if(uppercase === false && lowercase===false && numeric===true && specials===false){
      passwordarr[i]=char(numericCharacters)
    }else if(uppercase === false && lowercase===false && numeric===false && specials===true){
      passwordarr[i]=char(specialCharacters)
    }  
    }
    
    
    return passwordarr.join('');
    // console.log(passwordarr)
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

