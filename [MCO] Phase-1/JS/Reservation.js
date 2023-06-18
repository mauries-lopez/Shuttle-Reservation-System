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