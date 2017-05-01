//Globals.
var pattern = null;

// Return type can change as testers see fit.
function isValidUsername(){
    var userName = document.getElementsByName('fname')[0].value;
    var userNameOK = pattern.test(userName);

    if(userNameOK){
      document.getElementById('p1').innerHTML = "Valid Username";
      return true;
    }
    else{
      document.getElementById('p1').innerHTML = "Invalid Username";
      return false;
    }
}

// Input is a RegEx.
// Return type can change as testers see fit.
function setUserNameScheme(input){
    pattern = input;
    return true;
}

// RegEx should accept A-Z, a-z, 0-9, _
function main(){
    setUserNameScheme(/^\w+$/);
}
