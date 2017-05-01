//Globals.
var pattern = null;

// Return type can change as testers see fit.
function isValidUsername(){
    var userName = document.getElementsByName('fname')[0].value;
    var userNameOK = pattern.test(userName);

    if(userNameOK){
      document.getElementById('p1').innerHTML = "Valid Username <span class='glyphicon glyphicon-ok'></span>";
      document.getElementById('p1').setAttribute("class","text-center bg-success");
      return true;
    }
    else{
      document.getElementById('p1').innerHTML = "Invalid Username <span class='glyphicon glyphicon-remove'></span>";
      document.getElementById('p1').setAttribute("class","text-center bg-danger");
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
