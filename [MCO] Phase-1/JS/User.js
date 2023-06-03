class user_storage {
    constructor(firstName, lastName, email, password, designation, passengerType) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.designation = designation;
      this.passengerType = passengerType;
    }

    getEmail() {
      return this.email;
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

var user0 = new user_storage("admin", "admin", "admin@gmail.com", "admin", "student", "student");
var user1 = new user_storage("maui", "lopez", "maui@gmail.com", "maui", "student", "student");
var user2 = new user_storage("benmar", "ramirez", "benmar@gmail.com", "benmar", "student", "student");
var user3 = new user_storage("nathan", "asnan", "asnan@gmail.com", "asnan", "student", "student");


function showErrorBox(){
    document.getElementById('error_box').style.display = "block";
    setTimeout(hideErrorBox, 4000);
}

function hideErrorBox(){
    document.getElementById('error_box').style.display = "none";
}

function validate_User() {
  var valid_user = new Array(user0, user1, user2, user3);
  var email = document.getElementById('user_email').value;
  var password = document.getElementById('user_password').value;
  var registeredUser = localStorage.getItem('valid_user');

  var isValidUser = false;

  if (registeredUser && registeredUser.match(email) && registeredUser.match(password)) {
    isValidUser = true;
  } else {
    for (var i = 0; i < valid_user.length; i++) {
      if (email === valid_user[i].getEmail() && password === valid_user[i].getPassword()) {
        isValidUser = true;
        break;
      }
    }
  }
  
  if (isValidUser) {
    if ( localStorage.length != 0 ) { // Iibahin lugar nito pag may html na for profile para idedelete
      localStorage.clear();
    }
    return true;
  } else {
    showErrorBox();
    return false;
  }
}


function create_User(){

    var tempFirstName = document.getElementById('user_firstName').value;
    var tempLastName = document.getElementById('user_lastName').value;
    var tempEmail = document.getElementById('user_email').value;
    var tempPassword = document.getElementById('user_password').value;

    var storeDesignation = document.getElementById('user_designation');
    var tempDesignation = storeDesignation.options[storeDesignation.selectedIndex].text;

    var storePassengerType = document.getElementById('user_passengerType');
    var tempPassengerType = storePassengerType.options[storePassengerType.selectedIndex].text;

    /*
    localStorage.setItem('firstName', tempFirstName);
    localStorage.setItem('lastName', tempLastName);
    localStorage.setItem('email', tempEmail);
    localStorage.setItem('password', tempPassword);
    localStorage.setItem('designation', tempDesignation);
    localStorage.setItem('passengerType', tempPassengerType);
    

    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('designation');
    localStorage.removeItem('passengerType');
    */

    var newUser = new user_storage(tempFirstName, tempLastName, tempEmail, tempPassword, tempDesignation, tempPassengerType);

    localStorage.setItem('valid_user', JSON.stringify(newUser));

}



