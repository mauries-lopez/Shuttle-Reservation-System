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
var valid_user = new Array(user0, user1, user2, user3);

function showErrorBox(){
    document.getElementById('error_box').style.display = "block";
    setTimeout(hideErrorBox, 4000);
}

function hideErrorBox(){
    document.getElementById('error_box').style.display = "none";
}

function validate_User() {
    var email = document.getElementById('user_email').value;
    var password = document.getElementById('user_password').value;

    var isValidUser = false;
  
    for (var i = 0; i < valid_user.length; i++) {
      if (email === valid_user[i].getEmail() && password === valid_user[i].getPassword()) {
        isValidUser = true;
        break;
      }
    }
  
    if (isValidUser) {
      return true;
    } else {
      showErrorBox();
      return false;
    }

}

function create_User(user_firstName, user_lastName, user_email, user_password){

    var newUser = new user_storage(user_firstName.value, user_lastName.value, user_email.value, user_password.value);
    valid_user.push(newUser);

    alert("User has been created!");
    alert(user_firstName.value + " " + user_lastName.value + " " + user_email.value + " " + user_password.value);

}
