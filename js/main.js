// sign up HTML
let signupUserName = document.getElementById("signupUserName");
let signupUserEmail = document.getElementById("signupUserEmail");
let userPassword = document.getElementById("userPassword");
let signUp = document.getElementById("signUp");

// sign in HTML
let signinEmail = document.getElementById("signinEmail");
let signinUserPassword = document.getElementById("signinUserPassword");
let Login = document.getElementById("Login");


let arrUsers = [];
if (localStorage.getItem('users') == null) {
  arrUsers = [];
} else {
  arrUsers = JSON.parse(localStorage.getItem('users'))
}

// Function to check values ​​if they are empty
function isEmpty() {
  // Check if the value is a string.
  if (signupUserName.value === "" || signupUserEmail.value === "" || userPassword === "") {
    return false;
  }
  // Check if the value is empty.
  return true;
}

function emailExist() {
  for (let i = 0; i < arrUsers.length; i++) {
    if (arrUsers[i].email.toLowerCase() == signupUserEmail.value.toLowerCase()) {
      return false
    }
  }
};

//  validation regex

const nameRegex = /^\w{3,}(\s+\w+)*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// validation sign up user name

signupUserName.addEventListener("input", () => validate(signupUserName, nameRegex));

// validation sign up user email

signupUserEmail.addEventListener("input", () => validate(signupUserEmail, emailRegex));

// if values valid make the class list is valid and  vice versa is invalid

function validate(element, regex) {
  const testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

// sign up

function addUser() {
  if (isEmpty() == false) {
    document.getElementById('exist').innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
    return false;
  }


  const UserValues = {
    name: signupUserName.value,
    email: signupUserEmail.value,
    password: userPassword
  }
  if (arrUsers.length == 0) {
    arrUsers.push(UserValues);
    localStorage.setItem('user', JSON.stringify(arrUsers));
    document.getElementById("exist").innerHTML = `<span class="text-success m-3">Success</span>`;
    return true;
  }
  if (emailExist() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
  }
  else {
    arrUsers.push(UserValues);
    localStorage.setItem('user', JSON.stringify(arrUsers));
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
  }
}

signUp.addEventListener("click", addUser);

// Function to check values ​​if they are empty
function loginEmpty() {
  if (signinEmail.value == "" || signinUserPassword.value == "") {
    return false;
  } else {
    return true;
  }
};

// validation sign in email

signinEmail.addEventListener("input", () => validate(signinEmail, emailRegex));


// if values valid make the class list is valid and  vice versa is invalid  

function validate(element, regex) {
  const testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

// sign in  

function loginUser() {
  if (loginEmpty() == false) {
    document.getElementById('incorrect').innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
    return false;
  }
  let password = signinUserPassword.value;
  let email = signinEmail.value;
  for (let i = 0; i < arrUsers.length; i++) {
    if (arrUsers[i].email.toLowerCase() == signinEmail.value.toLowerCase()) {
      if (arrUsers[i].password == signinUserPassword.value) {
        localStorage.setItem('sessionUsername', arrUsers[i].name);
      } else {
        document.getElementById('incorrect').innerHTML = `<span class="text-danger m-3">incorrect email or password</span>`;
      }
    }
  }
};

Login.addEventListener("click", loginUser);
