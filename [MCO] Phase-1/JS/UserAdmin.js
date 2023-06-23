function userReserve(){

    var scheduleContainer = document.getElementsByClassName('schedule_container')[0];
    var scheduleForm = document.getElementsByClassName('form_box')[0];

    var div = document.createElement('div');
    div.className = 'reserved_schedule';
	
	count = scheduleContainer.childElementCount;
	div.setAttribute('id', count );
	
    scheduleContainer.appendChild(div);
  
    var reserved_schedule_container = document.getElementsByClassName('reserved_schedule')[count];
    var divBtn = document.createElement('div');
    divBtn.className = 'reserved_schedule_btn';
    
    reserved_schedule_container.appendChild(divBtn);
    
    var edit_btn = document.createElement('button');
    edit_btn.className = 'edit_btn';
	edit_btn.setAttribute('id', 'e_btn' + count);
    edit_btn.setAttribute('onclick','showEditForm(' + count + ')');
    edit_btn.innerHTML = 'EDIT';

    var delete_btn = document.createElement('button');
    delete_btn.className = 'delete_btn';
	delete_btn.setAttribute('id', 'd_btn' + count);
	delete_btn.setAttribute('onclick','showDeleteForm(' + count + ')');
    delete_btn.innerHTML = 'DELETE';

    divBtn.appendChild(edit_btn);
    divBtn.appendChild(delete_btn);

    createTextInfo(div);

    scheduleForm.addEventListener('submit', function(e) {
       e.preventDefault();
	})

    scheduleForm.style.display = 'none';

}

function createTextInfo(main_div){
    
    var text_info = document.createElement('div');
    text_info.className = 'text_reserved_schedule';
    main_div.appendChild(text_info);

    var locationValue;
    if ( functionCalled == 0 ){
        locationValue = document.getElementById('laguna_btn');
    }
    else{
        locationValue = document.getElementById('manila_btn');
    }

    var idValue = document.getElementById('user_idNumber');
    var dateValue = document.getElementById('user_date');
    var entryValue = document.getElementById('user_entry');
    var entryTimeValue = document.getElementById('user_entryTime');
    var exitValue = document.getElementById('user_exit');
    var exitTimeValue = document.getElementById('user_exitTime');

    var locationText = document.createElement('p');
    locationText.innerHTML = locationValue.innerHTML;

    var idText = document.createElement('p');
    if ( idValue.value == '' ){
        idText.innerHTML = 'N/A';
    }
    else{
        
        idText.innerHTML = idValue.value;
    }

    var dateText = document.createElement('p');
    dateText.setAttribute('id', 'date_text');
    if ( dateValue.value == '' ){
        dateText.innerHTML = 'N/A';
    }
    else{
        
        dateText.innerHTML = dateValue.value;
    }

    var entryText = document.createElement('p');
    if ( entryValue.options[entryValue.selectedIndex].text == 'N/A' || entryValue.options[entryValue.selectedIndex].text == "Entry Location"){
        entryText.innerHTML = 'N/A';
    }
    else{
        entryText.innerHTML = entryValue.options[entryValue.selectedIndex].text;
    }

    var entryTimeText = document.createElement('p');
    if ( entryTimeValue.options[entryTimeValue.selectedIndex].text == 'N/A' || entryTimeValue.options[entryTimeValue.selectedIndex].text == "Time Slot"){
        entryTimeText.innerHTML = 'N/A';
    }
    else{
        entryTimeText.innerHTML = entryTimeValue.options[entryTimeValue.selectedIndex].text;
    }

    var exitText = document.createElement('p');
    if ( exitValue.options[exitValue.selectedIndex].text == 'N/A' || exitValue.options[exitValue.selectedIndex].text == "Exit Location"){
        exitText.innerHTML = 'N/A';
    }
    else{
        exitText.innerHTML = exitValue.options[exitValue.selectedIndex].text;
    }

    var exitTimeText = document.createElement('p');
    if ( exitTimeValue.options[exitTimeValue.selectedIndex].text == 'N/A' || exitTimeValue.options[exitTimeValue.selectedIndex].text == "Time Slot" ){
        exitTimeText.innerHTML = 'N/A';
    }
    else{
        exitTimeText.innerHTML = exitTimeValue.options[exitTimeValue.selectedIndex].text;
    }


    var border = new Array();

    for ( var i = 0; i < 5; i++ ){
        border[i] = document.createElement('hr');
    }

    text_info.appendChild(locationText);
    text_info.appendChild(border[0]);
    text_info.appendChild(idText);
    text_info.appendChild(border[1]);
    text_info.appendChild(dateText);
    text_info.appendChild(border[2]);
    text_info.appendChild(entryText);
    text_info.appendChild(entryTimeText);
    text_info.appendChild(border[3]);
    text_info.appendChild(exitText);
    text_info.appendChild(exitTimeText);
    text_info.appendChild(border[4]);

}



