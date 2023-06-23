var functionCalled = 0; // 0 = left (Laguna), 1 = right (Manila)
var efunctionCalled = 0; //For editing form
var count = 0;

function leftClick(){
    functionCalled = 0;
    btn.style.left = '0';
}

function rightClick(){
    functionCalled = 1;
    btn.style.left = '160px';
}

function eleftClick(){
    functionCalled = 0;
    ebtn.style.left = '0';
}

function erightClick(){
    functionCalled = 1;
    ebtn.style.left = '160px';
}

function showScheduleForm() {
	var doc = document;
    var scheduleForm = document.getElementsByClassName('form_box')[0];
	var date_box = document.getElementById('user_date');
	var entry_box = doc.getElementById('user_entry');
	var entryTimeBox = doc.getElementById('user_entryTime');
	var exitBox = doc.getElementById('user_exit');
	var exitTimeBox = doc.getElementById('user_exitTime');

	date_box.value="";
	entry_box.value="";
	entryTimeBox.value="";
	exitBox.value="";
	exitTimeBox.value="";
	
	
	var newOption = doc.createElement('option');
	var optionText = doc.createTextNode('Time Slot');
	newOption.appendChild(optionText);
	newOption.setAttribute('value','');
	newOption.setAttribute('selected','');
	newOption.setAttribute('hidden','');
	
	entryTimeBox.appendChild(newOption);
	
	newOption = doc.createElement('option');
	optionText = doc.createTextNode('Time Slot');
	newOption.appendChild(optionText);
	newOption.setAttribute('value','');
	newOption.setAttribute('selected','');
	newOption.setAttribute('hidden','');
	
	exitTimeBox.appendChild(newOption);
	
	
	
    scheduleForm.style.display = 'block';
	
}

function hideScheduleForm(){

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

    scheduleForm,addEventListener('submit', function(e) {
       e.preventDefault();
	})

    scheduleForm.style.display = 'none';

}

function showEditForm(i) {
	var doc = document;
    var editForm = document.getElementById('edit_box');
	var date_box = document.getElementById('user_date');
	var entry_box = doc.getElementById('user_entry');
	var entryTimeBox = doc.getElementById('user_entryTime');
	var exitBox = doc.getElementById('user_exit');
	var exitTimeBox = doc.getElementById('user_exitTime');

	date_box.value="";
	entry_box.value="";
	entryTimeBox.value="";
	exitBox.value="";
	exitTimeBox.value="";
	
	
	var newOption = doc.createElement('option');
	var optionText = doc.createTextNode('Time Slot');
	newOption.appendChild(optionText);
	newOption.setAttribute('value','');
	newOption.setAttribute('selected','');
	newOption.setAttribute('hidden','');
	
	entryTimeBox.appendChild(newOption);
	
	newOption = doc.createElement('option');
	optionText = doc.createTextNode('Time Slot');
	newOption.appendChild(optionText);
	newOption.setAttribute('value','');
	newOption.setAttribute('selected','');
	newOption.setAttribute('hidden','');
	
	exitTimeBox.appendChild(newOption);
	
	
	
    editForm.style.display = 'block';
	
}

function hideEditForm(){
	var editForm = document.getElementById('edit_box');
	
	editForm.style.display="none";
}

function cancelEditForm(){
    var editForm = document.getElementById('edit_box');
	
	editForm.style.display="none";
}

function showDeleteForm(i) {
	var doc = document;
    var deleteForm = document.getElementById('delete_box');	
	var deleteButton = doc.getElementById('delete_btn');
	
    deleteForm.style.display = 'block';
	deleteButton.setAttribute('onclick', 'hideDeleteForm(' + i + ')');
}

function hideDeleteForm(i){
	var deleteForm = document.getElementById('delete_box');
	
	var deleteReservation = document.getElementById(i);
	
	deleteReservation.remove();
	
	deleteForm.style.display="none";
}

function cancelDeleteForm(){
	var deleteForm = document.getElementById('delete_box');
	
	deleteForm.style.display="none";
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

    var dateValue = document.getElementById('user_date');
    var entryValue = document.getElementById('user_entry');
    var entryTimeValue = document.getElementById('user_entryTime');
    var exitValue = document.getElementById('user_exit');
    var exitTimeValue = document.getElementById('user_exitTime');

    var locationText = document.createElement('p');
    locationText.innerHTML = locationValue.innerHTML;

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

    for ( var i = 0; i < 4; i++ ){
        border[i] = document.createElement('hr');
    }

    text_info.appendChild(locationText);
    text_info.appendChild(border[0]);
    text_info.appendChild(dateText);
    text_info.appendChild(border[1]);
    text_info.appendChild(entryText);
    text_info.appendChild(entryTimeText);
    text_info.appendChild(border[2]);
    text_info.appendChild(exitText);
    text_info.appendChild(exitTimeText);
    text_info.appendChild(border[3]);

}

function cancelScheduleForm(){
    var scheduleForm = document.getElementsByClassName('form_box')[0];
    scheduleForm.style.display = 'none';
}

function readyChangeTime( location_id, time_id ){
    changeEntryTimeSlots(location_id, time_id);
}

function changeEntryTimeSlots(location_id, time_id){
    var selectedLocation = document.getElementById(location_id);
    var location = selectedLocation.options[selectedLocation.selectedIndex].value;
    
    var timeSlots = document.getElementById(time_id);
    timeSlots.innerHTML = '';

    if ( location_id == 'user_entry' ){ //Entry Point
        if ( location == 0 ){
            var storage_time = ["05:45 AM", "06:15 AM", "07:00 AM", "08:00 AM", "09:00 AM", "11:00 AM", "01:00 PM", "02:30 PM", "03:30 PM", "05:10 PM", "06:15 PM", "07:45 PM", "N/A"];
            changeTimeHelper( time_id, storage_time );
        }
        else if ( location == 1 ){
            var storage_time = ["06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", 
                                "08:30 AM", "09:00 AM", "09:30 AM", "10:30 AM", "11:30 AM", 
                                "12:30 PM", "01:00 PM", "02:00 PM", "03:00 PM", "03:30 PM",
                                "04:40 PM", "N/A"];
            changeTimeHelper( time_id, storage_time );
        }
        else if ( location == 2 ){
            //Paki continue nalang nito. Paulit ulit lang to.
            /*
                location:
                #2 = Carmona
                #3 = Pavilion
                #4 = Walter mart
                #5 = N/A

                copy paste nalang ung mga nasa loob ng blocks, tapos ibahin lang ung time.
            */
        }
    }

    if ( location_id = 'user_exit' ){ //Exit Point 
        if ( location == 0 ){
            // Same lang din dito pero PAUWI naman ung time na susundan.
            /*
                location:
                #0 = DLSU Manila
                #1 = Paseo
                #2 = Carmona
                #3 = Pavilion
                #4 = Walter mart
                #5 = N/A

                copy paste nalang ung mga nasa loob ng blocks, tapos ibahin lang ung time.
            */
        }
    }

}

function changeTimeHelper( position, storage_time ){

    var timeSlots = document.getElementById(position);

    for ( var i = 0; i < storage_time.length; i++ ){
        var option = document.createElement('option');
        option.value = i;
        option.innerHTML = storage_time[i];
        timeSlots.appendChild(option);
    }
}