function validateform() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  // regular expression for name, email, password//
  
  var nameregx = /([A-Z][^\s]*)/;
  var emailregex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  var passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,14}$/;

  if (name == "" || name.length >= 25 || !name.match(nameregx)) {
    alert("Name should be less than 25 Character with Proper Case");
    return false;
  }
  else if (email == "" || email > 30 || !email.match(emailregex)) {
    alert("Email is not valid & it be more than 30 characters.");
    return false;
  }
  else if (password == "" || password.length <= 6 || password.length >= 14 || !password.match(passregex)) {
    alert("password length must be 7 to 14 digit and have atleast 1 special char and 1 Upper case and lower case letter and number.");
    return false;
  }
  else {
    alert("form has been submitted")
    document.getElementById("name").value="";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    
  }
  
}
function opengoogle() {
  window.open("https://google.com")
}
function openfb() {
  window.open("https://facebook.com")
}
