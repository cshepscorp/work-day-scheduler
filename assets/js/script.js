// current date
var currentDay = document.querySelector("#current-day");
currentDay.textContent = moment().format('dddd, MMMM Do');

var currentMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().format('HH');
var dynamicTimeSlots = document.querySelector('#dynamic-hours');

var textareas = document.querySelector("#col-md-10");

for (var i = 9; i <= 17; i++) {
    var timeSlot = i;
    var colorCodes;
    
    // replaces the colorCodes placeholder in the template literal
    // to add a class-name to the textarea's based on the time of day
    if (currentHour == i) {
        colorCodes = 'current' 
    } else if (currentHour < i) { 
        colorCodes = 'future'
    } else {
        colorCodes = 'past'
    }
    console.log(currentHour);

    // array holding formatted values for Time Slots for easier consumption
    var formattedTimes = ["", "", "", "", "", "", "", "", "", "9AM", "10AM", "11AM", "12 Noon", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"];

    // create div to hold times by hour
    var dynamicTimeDiv = document.createElement('div');
    dynamicTimeDiv.className = 'row';
    dynamicTimeDiv.id = 'hour-' + [i];
    dynamicTimeSlots.append(dynamicTimeDiv);

    // create span to hold hour label and add to div above
    var dynamicTimeSpan = document.createElement('span');
    dynamicTimeSpan.className = 'hour col-md-1 col-2';
    dynamicTimeSpan.id = 'label-' + [i];
    dynamicTimeSpan.textContent = formattedTimes[i];
    dynamicTimeDiv.append(dynamicTimeSpan);

    // create textarea to hold tasks and add to div above
    var dynamicTimeTextarea = document.createElement('textarea');
    dynamicTimeTextarea.classList.add(colorCodes, 'col-md-10', 'col-8', 'hour-' + [i], 'textarea' + [i]);

    dynamicTimeDiv.append(dynamicTimeTextarea);

    // create button for saving tasks and add to div above
    var dynamicTimeButton = document.createElement('button');
    dynamicTimeButton.className = 'btn col-md-1 col-2 saveBtn';
    dynamicTimeButton.innerHTML = `<i class='far fa-save'></i>`;

    dynamicTimeDiv.append(dynamicTimeButton);
};

// task section was clicked
$(textareas).on("click", "textarea", function() {
    // get current text of element
    var text = $(this)
      .text().trim();
  
    var textInput = $("<textarea>").val(text); // can chain .addClass between if necessary
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus"); // auto focus new element
});

$('.saveBtn').on('click', function(event) {
    event.preventDefault();

    var time = $(this).parent().attr("id");
    var task = $(this).siblings("textarea").val();
    // console.log(time, task);
    localStorage.setItem(time, task);

}); 

// adds saved content to localStorage
var setTimeSlot = function() {
    for (var i = 9; i <= 17; i++) { // uses same for loop as the initial div setup
        $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
    }
}

setTimeSlot();

// button for user to easily reset their day
var resetSchedule = function(){
    localStorage.clear();
    location.reload();
}

document.getElementById("reset").addEventListener("click", resetSchedule);

