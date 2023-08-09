const signupUserName = document.getElementById("signupUserName");
const signupUserEmail = document.getElementById("signupUserEmail");
const userPassword = document.getElementById("userPassword");

const signinEmail = document.getElementById("signinEmail");
const signinUserPassword = document.getElementById("signinUserPassword");

const signUp = document.getElementById("signUp");

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
  for (var i = 0; i < arrUsers.length; i++) {
    if (arrUsers[i].email.toLowerCase() == signupUserEmail.value.toLowerCase()) {
      return false
    }
  }
}



function addUser() {
  if (isEmpty() == false) {
    document.getElementById("exist").innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
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



















// signUp.addEventListener("click", isEmpty);

// // Function to check if an email already exists
// function emailExists(email) {
//   // Get all of the emails from local storage.
//   const emails = localStorage.getItem("emails");
//   // If there are no emails in local storage, return false.
//   if (!emails) {
//     return false;
//   }
//   // Convert the emails from a string to an array.
//   emails = JSON.parse(emails);
//   // Check if the email exists in the array.
//   for (const existingEmail of emails) {
//     if (existingEmail === email) {
//       return true;
//     }
//   }
// The email does not exist in local storage.
//   return false;
// }


// Get the user name, email, and password from the user.
// const username = prompt("Enter your username");
// const email = prompt("Enter your email");
// const password = prompt("Enter your password");
// // Set the user name, email, and password in local storage.
// localStorage.setItem("username", username);
// localStorage.setItem("email", email);
// localStorage.setItem("password", password);