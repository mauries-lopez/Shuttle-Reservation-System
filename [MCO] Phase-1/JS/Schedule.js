function leftClick(){
    btn.style.left = '0';

    var user_location = document.getElementById('user_location');

    user_location.innerHTML = '';

    var option0 = document.createElement('option');
    option0.value = 0;
    option0.innerHTML = 'Laguna';

    var option1 = document.createElement('option');
    option1.value = 1;
    option1.innerHTML = 'Paseo';

    var option2 = document.createElement('option');
    option2.value = 2;
    option2.innerHTML = 'Carmona';

    var option3 = document.createElement('option');
    option3.value = 3;
    option3.innerHTML = 'Pavilion Mall';

    var option4 = document.createElement('option');
    option4.value = 4;
    option4.innerHTML = 'N/A';

    var option = document.createElement('option');
    option.value = "";
    option.attributes = "selected";
    option.attributes = "disabled";
    option.attributes = "hidden";
    option.attributes = "s"; 
    option.innerHTML = "Select Location"

    var option_array = [option, option0, option1, option2, option3, option4];

    for ( var i = 0; i < option_array.length; i++ ) {
        user_location.appendChild(option_array[i]);
    }

}

function rightClick(){
    btn.style.left = '160px';

    var user_location = document.getElementById('user_location');

    user_location.innerHTML = '';

    var option0 = document.createElement('option');
    option0.value = 0;
    option0.innerHTML = 'Manila';

    var option1 = document.createElement('option');
    option1.value = 1;
    option1.innerHTML = 'Paseo';

    var option2 = document.createElement('option');
    option2.value = 2;
    option2.innerHTML = 'Carmona';

    var option3 = document.createElement('option');
    option3.value = 3;
    option3.innerHTML = 'Pavilion Mall';

    var option4 = document.createElement('option');
    option4.value = 4;
    option4.innerHTML = 'Walter Mart';

    var option5 = document.createElement('option');
    option5.value = 5;
    option5.innerHTML = 'N/A';

    var option = document.createElement('option');
    option.attributes = "selected";
    option.attributes = "disabled";
    option.attributes = "hidden";
    option.attributes = "s"; 
    option.innerHTML = "Select Location"

    var option_array = [option, option0, option1, option2, option3, option4, option5];

    for ( var i = 0; i < option_array.length; i++ ) {
        user_location.appendChild(option_array[i]);
    }

}

function showScheduleForm() {
    var scheduleForm = document.getElementsByClassName('form_box')[0];
    scheduleForm.style.display = 'block';
}

function hideScheduleForm() {
    var scheduleContainer = document.getElementsByClassName('schedule_container')[0];
    var scheduleForm = document.getElementsByClassName('form_box')[0];
  
    var prevDiv = scheduleContainer.getElementsByClassName('viewed_schedule')[0];
    if (prevDiv) {
      scheduleContainer.removeChild(prevDiv);
    }
  
    var div = document.createElement('div');
    div.className = 'viewed_schedule';
  
    scheduleContainer.appendChild(div);
  
    scheduleForm.style.display = '';
}
  

function cancelScheduleForm(){
    var scheduleForm = document.getElementsByClassName('form_box')[0];
    scheduleForm.style.display = '';
}