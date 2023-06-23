class user_storage {
    constructor(firstName, lastName, email, idNumber, password, designation, passengerType) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.idNumber = idNumber;
      this.password = password;
      this.designation = designation;
      this.passengerType = passengerType;
    }

    getEmail() {
      return this.email;
    }

    getIdNumber() {
      return this.idNumber;
    }

    getPassword() {
      return this.password;
    }

    getFirstName() {
      return this.firstName;
    }

    getLastName() {
      return this.lastName;
    }

    getDesignation(){
      return this.designation;
    }

    getPassengerType(){
      return this.passengerType;
    }

}

class loggedInUser {
  constructor(idNumber, password) {
    this.idNumber = idNumber;
    this.password = password;
  }

  getIdNumber() {
    return this.idNumber;
  }

  getPassword() {
    return this.password;
  }

}

var user0 = new user_storage("admin", "admin", "admin@gmail.com", "99999999",/* REPLACE WITH ID NUMBER, */ "admin", "employee", "employee");
var user1 = new user_storage("maui", "lopez", "maui@gmail.com", "12177539", "maui", "employee", "employee");
var user2 = new user_storage("benmar", "ramirez", "benmar@gmail.com", "00000000",/* REPLACE "00000000" WITH ID NUMBER, */ "benmar", "employee", "employee");
var user3 = new user_storage("nathan", "asnan", "asnan@gmail.com", "00000000",/* REPLACE WITH ID NUMBER, */ "asnan", "employee", "employee");
var user4 = new user_storage("admin1", "admin1", "admin1@gmail.com", "88888888",/* REPLACE WITH ID NUMBER, */ "admin1", "employee", "employee")

var registerdUserCount = localStorage.length; //For key in local storage

function showErrorBox(){
    document.getElementById('error_box').style.display = "block";
    setTimeout(hideErrorBox, 4000);
}

function hideErrorBox(){
    document.getElementById('error_box').style.display = "none";
}

function validate_User() {
  var valid_user = new Array(user0, user1, user2, user3, user4);
  var idNumber = document.getElementById('user_idNumber').value;
  var password = document.getElementById('user_password').value;
  var registeredUser;
  

  for ( var i = 0 ; i < localStorage.length ; i++ ) {

    var key = localStorage.key(i);
    registeredUser = localStorage.getItem(key);

    if ( registeredUser && (registeredUser.match(idNumber) && registeredUser.match(password))) {
      isValidUser = 1;
      break;
    }
    else{
      isValidUser = 0;
    }
  }

  var isValidUser = 0;

  var loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    var user_loggedIn = new loggedInUser(idNumber, password);

    if ( registeredUser && (registeredUser.match(idNumber) && registeredUser.match(password))) { //Local Storage Validation
      isValidUser = 1;
    } else {
      for (var i = 0; i < valid_user.length; i++) {
        if (idNumber === valid_user[i].getIdNumber() && password === valid_user[i].getPassword()) { //Admin Validation
          isValidUser = 2;
          break;
        }
        else{
          isValidUser = 0;
        }
      }
    }

    if (isValidUser == 1 && (idNumber != "" && password != "")) {
      localStorage.setItem('loggedInUser', JSON.stringify(user_loggedIn));
      window.location.href = "Profile.html";
      return 1;
    } else if ( isValidUser == 2 && (idNumber != "" && password != "")) {
      localStorage.setItem('loggedInUser', JSON.stringify(user_loggedIn));
      window.location.href = "ProfileAdmin.html";
      return 1;
    }
    else{
      showErrorBox();
      return 0;
    }

  });

}

function create_User(){

    var tempFirstName = document.getElementById('user_firstName').value;
    var tempLastName = document.getElementById('user_lastName').value;
    var tempEmail = document.getElementById('user_email').value;
    var tempIdNumber = document.getElementById('user_idNumber').value;
    var tempPassword = document.getElementById('user_password').value;

    var storeDesignation = document.getElementById('user_designation');
    var tempDesignation = storeDesignation.options[storeDesignation.selectedIndex].text;

    var storePassengerType = document.getElementById('user_passengerType');
    var tempPassengerType = storePassengerType.options[storePassengerType.selectedIndex].text;

    alert('User Created! Directing to Login Page...');
    var newUser = new user_storage(tempFirstName, tempLastName, tempEmail, tempIdNumber, tempPassword, tempDesignation, tempPassengerType);

    localStorage.setItem('valid_user['+registerdUserCount+']' , JSON.stringify(newUser));

    registerdUserCount++;

}

function logoutAccount(){
  localStorage.removeItem('loggedInUser');
}


