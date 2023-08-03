function showErrorBox(){
    document.getElementById('error_box').style.display = "block";
    setTimeout(hideErrorBox, 4000);
}

function hideErrorBox(){
    document.getElementById('error_box').style.display = "none";
}



async function submitForm(event) {
  event.preventDefault()
  const userId = document.getElementById('user_idNumber').value


  const response = await fetch(`/SignUp/userid=${userId}`)
  const data = await response.json()
  const errorText = document.getElementById('errorText')
  console.log(data)





  if (data === "unique"){
    // send a post request to add the info to the database
    // get all data and store it in database
    const registerData = {

      
      "firstName": document.getElementById('user_firstName').value,
      "lastName": document.getElementById('user_lastName').value,
      "email": document.getElementById('user_email').value,
      "idNumber":document.getElementById('user_idNumber').value,
      "password": document.getElementById('user_password').value,
      "securityCode": document.getElementById('user_securityCode').value,
      "designation" : document.getElementById('user_designation').value,
      "passengerType": document.getElementById('user_passengerType').value,
    }
    
    console.log(registerData)
    const response = await fetch('/SignUp', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(registerData),
    });
    if (response.ok){
      console.log('User successfully added');
      window.location.href = '/Login'; // Redirect to the /Login page
    }
 
 
  }
  else {
    errorText.textContent = "ERROR"
    errorText.style.fontSize = "2rem"
  }




}
/*

function validate_User() {
  var valid_user = new Array(user0, user1, user2, user3, user4);
  var idNumber = document.getElementById('user_idNumber').value;
  var password = document.getElementById('user_password').value;
  var registeredUser;
  var isValidUser = 0;

  var loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);

      if ( key.startsWith('valid_user') ){ 
        registeredUser = localStorage.getItem(key);
      }
     
      try{
        var tempIdNumber = JSON.parse(registeredUser).idNumber;
        var tempPassword = JSON.parse(registeredUser).password;
      }
      catch{
        console.log("Error 404");
      }

      if (idNumber == tempIdNumber && password == tempPassword ) { //Local Storage Validation
        isValidUser = 1;
        break; // Exit the loop since a valid registered user is found
      }
    }

    if (isValidUser === 0) {
      for (var i = 0; i < valid_user.length; i++) {
        if ((idNumber === valid_user[i].getIdNumber()) && (password === valid_user[i].getPassword())) { //Admin Validation
          isValidUser = 2;
          break; // Exit the loop since a valid admin is found
        }
      }
    }

    if (isValidUser === 1 && (idNumber !== "" && password !== "")) {
      //localStorage.setItem('loggedInUser', JSON.stringify(user_loggedIn));
      window.location.href = "/Profile"; //Go to Registered User profile
      return 1;
    } else if (isValidUser === 2 && (idNumber !== "" && password !== "")) {
      //localStorage.setItem('loggedInUser', JSON.stringify(user_loggedIn));
      window.location.href = "/ProfileAdmin"; //Go to Admin Profile
      return 1;
    } else {
      localStorage.clear();
      showErrorBox();
      return 0;
    }
  });
}



var registeredUserCount = localStorage.length + 1; //For key in local storage

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

    var tempKey = 'valid_user['+registeredUserCount+']';

    var tempKeyPrefix = 'valid_user[';
    var tempKeySuffix = ']';

    for ( var i = 0; i < localStorage.length; i++ ) {
        var key = localStorage.key(i);

        if ( key == tempKey ){
            registeredUserCount++;
            console.log(key);
        }
    }

    localStorage.setItem('valid_user['+registeredUserCount+']' , JSON.stringify(newUser));

}

*/

function logoutAccount(){
  localStorage.removeItem('loggedInUser');
}


