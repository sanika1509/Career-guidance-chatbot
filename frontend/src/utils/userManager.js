const defaultUser = {
    userName : "Sanika Patil",
    userEmail : "sanika123@gmail.com",
}

// Function to set user object in localStorage
function setUserInLocalStorage(userObj) {
  localStorage.setItem('user', JSON.stringify(userObj));
}

// Function to retrieve user object from localStorage
function getUserFromLocalStorage() {
  const userObjString = localStorage.getItem('user');
  return userObjString ? JSON.parse(userObjString) : null;
}

// Function to set userName
function setUserName(name) {
  const user = getUserFromLocalStorage() || defaultUser;
  user.userName = name;
  setUserInLocalStorage(user);
}

// Function to get userName
function getUserName() {
  const user = getUserFromLocalStorage() || defaultUser;
  return user.userName;
}

// Function to set userEmail
function setUserEmail(email) {
  const user = getUserFromLocalStorage() || defaultUser;
  user.userEmail = email;
  setUserInLocalStorage(user);
}

// Function to get userEmail
function getUserEmail() {
  const user = getUserFromLocalStorage() || defaultUser;
  return user.userEmail;
}

module.exports = { setUserName, getUserName, setUserEmail, getUserEmail };
