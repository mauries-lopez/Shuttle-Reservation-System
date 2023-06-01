function user_storage(first_name, last_name, email, password){
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;

    this.getEmail = function(){
        return this.email;
    }

    this.getPassword = function(){
        return this.password;
    }

    this.getFirstName = function(){
        return this.first_name;
    }

    this.getLastName = function(){
        return this.last_name;
    }
}

var user0 = new user_storage("admin", "admin", "admin@gmail.com", "admin");
var user1 = new user_storage("maui", "lopez", "maui@gmail.com", "maui");
var user2 = new user_storage("benmar", "ramirez", "benmar@gmail.com", "benmar");
var user3 = new user_storage("nathan", "asnan", "asnan@gmail.com", "asnan");
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
      if (email == valid_user[i].getEmail() && password == valid_user[i].getPassword()) {
        isValidUser = true;
        break; // Exit the loop since a match is found
      }
    }
  
    if (isValidUser) {
      return true;
    } else {
      showErrorBox();
      return false;
    }

  }
