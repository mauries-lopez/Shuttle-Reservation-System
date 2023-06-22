function leftClick() {
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
  option4.innerHTML = 'Waltermart';

  var option5 = document.createElement('option');
  option5.value = 5;
  option5.innerHTML = 'N/A';

  var option = document.createElement('option');
  option.value = '';
  option.setAttribute('selected', true);
  option.setAttribute('disabled', true);
  option.setAttribute('hidden', true);
  option.innerHTML = 'Select Location';

  var option_array = [option, option0, option1, option2, option3, option4, option5];

  for (var i = 0; i < option_array.length; i++) {
    user_location.appendChild(option_array[i]);
  }
}

function rightClick() {
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
  option.setAttribute('selected', true);
  option.setAttribute('disabled', true);
  option.setAttribute('hidden', true);
  option.innerHTML = 'Select Location';

  var option_array = [option, option0, option1, option2, option3, option4, option5];

  for (var i = 0; i < option_array.length; i++) {
    user_location.appendChild(option_array[i]);
  }
}

function showScheduleForm() {
  var scheduleForm = document.getElementsByClassName('form_box')[0];
  scheduleForm.style.display = 'block';
}

function hideScheduleForm() {
  var scheduleForm = document.querySelector('.form_box');
  scheduleForm.style.display = 'none';
}

function cancelScheduleForm() {
  var scheduleForm = document.getElementsByClassName('form_box')[0];
  scheduleForm.style.display = '';
}

function findMatchingSeats(event) {
  event.preventDefault();
  var user_location = document.getElementById('user_location').value;
  var user_entryTime = document.getElementById('user_entryTime').value;
  var buttonClicked = document.getElementById('btn').style.left === '0px' ? 'entry' : 'exit';

  var filteredCombinations = combinations.filter(function(combination) {
    return (
      combination.location === user_location &&
      combination.entryTime === user_entryTime &&
      combination.buttonClicked === buttonClicked
    );
  });

  if (filteredCombinations.length > 0) {
    var matchedCombination = filteredCombinations[0];
    alert('Schedule Match: ' + matchedCombination.message);
    var scheduleLabel = document.getElementById('schedule_label');
    scheduleLabel.textContent = matchedCombination.message;
    generateSeats(matchedCombination);
    return true;
  }

  alert('Error: No matching schedule found');
  return false;
}

function generateSeats(combination) {
  var seatContainer = document.getElementById('seat_container');
  seatContainer.innerHTML = '';

  var maxCapacity = 13; 

  for (var i = 0; i < maxCapacity; i++) {
    var seatSquare = document.createElement('div');
    seatSquare.classList.add('seat');
    seatSquare.textContent = i + 1;
    seatContainer.appendChild(seatSquare);
  }

  var seats = seatContainer.getElementsByClassName('seat');

  for (var i = 0; i < combination.seats.length; i++) {
    if (combination.seats[i].taken) {
      seats[i].classList.add('taken');
    }
  }
  
    var div = document.createElement('div');
    div.className = 'viewed_schedule';
  
    scheduleContainer.appendChild(div);

    scheduleForm,addEventListener('submit', function(e) {
        e.preventDefault();
    })

    scheduleForm.style.display = 'none';
}

var combinations = [

//ENTRY  
  // ENTRY TO LAGUNA
  {
    location: '0',
    entryTime: '1',
    buttonClicked: 'entry',
    message: 'To DLSU Laguna 06:00 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '0',
    entryTime: '4',
    buttonClicked: 'entry',
    message: 'To DLSU Laguna 07:30 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  // ENTRY TO PASEO
  {
    location: '1',
    entryTime: '6',
    buttonClicked: 'entry',
    message: 'To Laguna Central 09:00 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '1',
    entryTime: '9',
    buttonClicked: 'entry',
    message: 'To Laguna Central 11:30 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  //ENTRY TO CARMONA
  {
    location: '2',
    entryTime: '15',
    buttonClicked: 'entry',
    message: 'To Carmona 4:45 PM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '2',
    entryTime: '16',
    buttonClicked: 'entry',
    message: 'To Carmona 5:10 PM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  //ENTRY TO PAVILION
  {
    location: '3',
    entryTime: '15',
    buttonClicked: 'entry',
    message: 'To Pavilion 4:45 PM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '3',
    entryTime: '16',
    buttonClicked: 'entry',
    message: 'To Pavilion 5:10 PM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  //ENTRY TO WALTERMART
  {
    location: '4',
    entryTime: '2a',
    buttonClicked: 'entry',
    message: 'To DLSU Laguna From Waltermart 6:30AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '4',
    entryTime: '3',
    buttonClicked: 'entry',
    message: 'To DLSU Laguna From Waltermart 7:00 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

//EXIT  
  // EXIT TO MANILA
  {
    location: '0',
    entryTime: '0',
    buttonClicked: 'exit',
    message: 'To DLSU Manila 05:45 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '0',
    entryTime: '2',
    buttonClicked: 'exit',
    message: 'To DLSU Manila 06:15 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  // EXIT FROM PASEO
  {
    location: '1',
    entryTime: '1',
    buttonClicked: 'exit',
    message: 'To DLSU Laguna From Paseo 06:00 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '1',
    entryTime: '2a',
    buttonClicked: 'exit',
    message: 'To DLSU Laguna From Paseo 6:30 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  //EXIT FROM CARMONA
  {
    location: '2',
    entryTime: '2a',
    buttonClicked: 'exit',
    message: 'To DLSU Laguna From Carmona 6:30 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  //EXIT FROM PAVILION
  {
    location: '3',
    entryTime: '0a',
    buttonClicked: 'exit',
    message: 'To DLSU Laguna From Pavilion 5:30AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '3',
    entryTime: '1',
    buttonClicked: 'exit',
    message: 'To DLSU Laguna From Pavilion 6:00 AM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  //EXIT FROM WALTERMART
  {
    location: '4',
    entryTime: '15',
    buttonClicked: 'exit',
    message: 'To Waltermart 4:45 PM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },

  {
    location: '4',
    entryTime: '16',
    buttonClicked: 'exit',
    message: 'To Waltermart 5:10 PM',
    seats: Array.from({ length: 13 }, (_, i) => ({ number: i + 1, taken: false }))
  },
];




