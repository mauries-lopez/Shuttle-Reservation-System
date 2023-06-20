function leftClick(){
    btn.style.left = '0';
}

function rightClick(){
    btn.style.left = '160px';
}

function showScheduleForm() {
    var scheduleForm = document.getElementsByClassName('form_box')[0];
    scheduleForm.style.display = 'block';
}

function hideScheduleForm(){
    var scheduleContainer = document.getElementsByClassName('schedule_container')[0];
    var scheduleForm = document.getElementsByClassName('form_box')[0];

    var div = document.createElement('div');
    div.className = 'reserved_schedule';

    scheduleContainer.appendChild(div);
    
    scheduleForm.style.display = 'none';
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

