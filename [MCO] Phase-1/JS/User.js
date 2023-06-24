class user_storage {
    constructor(firstName, lastName, email, idNumber, password, designation, passengerType) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.idNumber = idNumber;
      this.password = password;
      this.designation = designation;
      this.passengerType = passengerType;
      this.fullName = firstName + " " + lastName;
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

var user0 = new user_storage("Admin", "Admin", "admin@gmail.com", "99999999", "admin", "Employee", "Employee");
var user1 = new user_storage("Maui", "Lopez", "maui@gmail.com", "12177539", "maui", "Employee", "Employee");
var user2 = new user_storage("Benmar", "Ramirez", "benmar@gmail.com", "12116866", "benmar", "Employee", "Employee");
var user3 = new user_storage("Nathan", "Asnan", "asnan@gmail.com", "12043338", "asnan", "Employee", "Employee");
var user4 = new user_storage("Admin1", "Admin1", "admin1@gmail.com", "88888888","admin1", "Employee", "Employee")

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

  var isValidUser = 0;
  
  for ( var i = 0 ; i < localStorage.length ; i++ ) {

    var key = localStorage.key(i);
    registeredUser = localStorage.getItem(key);
    
  }

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


