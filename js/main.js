const signupUserName = document.getElementById("signupUserName");
const signupUserEmail = document.getElementById("signupUserEmail");
const signupUserPassword = document.getElementById("signupUserPassword");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
var signUp = document.getElementById("signUp");

const arrName = [];

// Function to check values ​​if they are empty


signUp.addEventListener("click", () => {
  if (signupUserName.value == "" || signupUserEmail.value == "" || signupUserPassword == "") {
    return false;
  } else {
    return true;
  }
});



// Function to check if an email already exists

