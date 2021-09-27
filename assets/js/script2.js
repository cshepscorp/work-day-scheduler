// current date
var currentDay = document.querySelector("#current-day");
currentDay.textContent = moment().format('dddd, MMMM Do');


var currentMoment = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentHour = moment().format('HH'); 
console.log(currentHour);

// var currentHourString = JSON.stringify(currentHour);
// console.log(typeof currentHourString);

var $times = [];
$('span').each(function(){
    var id = $(this).attr('id');
    $times.push(id);

    console.log($times);
    console.log(typeof $times);
});

// task section was clicked
$(".col-md-10").on("click", "textarea", function() {
    // get current text of element
    var text = $(this)
      .text().trim();
  
    var textInput = $("<textarea>").val(text); // can chain .addClass between if necessary
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus"); // auto focus new element
});

// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();

//     const hour = $(this).siblings(".hour").attr("id");
//     const task = $(this).siblings(".textarea").val();

//     localStorage.setItem(hour, task);

//     // saveTasks();
// }); 


var setTimeSlot = function() {
    if (currentHour == "09") {
        $(".hour-09").addClass("present");
    } if (currentHour < "09") {
        $(".hour-09").addClass("future");
    } else {
        $(".hour-09").addClass("past");
    }
    
    if (currentHour == "10") {
        $(".hour-10").addClass("present");
    } if (currentHour < "10") {
        $(".hour-10").addClass("future");
    } else {
        $(".hour-10").addClass("past");
    }

    if (currentHour == "11") {
        $(".hour-11").addClass("present");
    } if (currentHour < "11") {
        $(".hour-11").addClass("future");
    } else {
        $(".hour-11").addClass("past");
    }

    if (currentHour == "12") {
        $(".hour-12").addClass("present");
    } if (currentHour < "12") {
        $(".hour-12").addClass("future");
    } else {
        $(".hour-12").addClass("past");
    }

    if (currentHour == "13") {
        $(".hour-13").addClass("present");
    } if (currentHour < "13") {
        $(".hour-13").addClass("future");
    } else {
        $(".hour-13").addClass("past");
    }

    if (currentHour == "14") {
        $(".hour-14").addClass("present");
    } if (currentHour < "14") {
        $(".hour-14").addClass("future");
    } else {
        $(".hour-14").addClass("past");
    }

    if (currentHour == "15") {
        $(".hour-15").addClass("present");
    } if (currentHour < "15") {
        $(".hour-15").addClass("future");
    } else {
        $(".hour-15").addClass("past");
    }

    if (currentHour == "16") {
        $(".hour-16").addClass("present");
    } if (currentHour < "16") {
        $(".hour-16").addClass("future");
    } else {
        $(".hour-16").addClass("past");
    }

    if (currentHour == "17") {
        $(".hour-17").addClass("present");
    } if (currentHour < "17") {
        $(".hour-17").addClass("future");
    } else {
        $(".hour-17").addClass("past");
    }

    console.log(currentHour);

}
setTimeSlot();

