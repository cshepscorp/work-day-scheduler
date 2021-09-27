// current date
var currentDay = document.querySelector("#current-day");
currentDay.textContent = moment().format('dddd, MMMM Do');

var currentMoment = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentHour = moment().format('HH');
console.log(currentHour);

// var currentHourString = JSON.stringify(currentHour);
// console.log(typeof currentHourString);

for (var i = 9; i <= 17; i++) {
    var timeSlot = i;
    var currentState;
    // timeblock is color coded to indicate whether it is in the past, present, or future
    if (currentHour === i) {
        $(".textarea").addClass("present");
    } else if (currentHour < i) {
        $(".textarea").addClass("future");
    } else {
        $(".textarea").addClass("past");
    }

    // if (currentHour === i) {
    //     $(".textarea").addClass("present");
    // } if (currentHour < i) {
    //     $(".textarea").addClass("future");
    // } else {
    //     $(".textarea").addClass("past");
    // }

    var newStuff =
        `<div class="row" id='hour-${i}'>
                <span class="hour col-md-1">${timeSlot}</span>
                <textarea class="col-md-10 past textarea${i} hour-${i}"></textarea>
                <button class="btn col-md-1 saveBtn"><i class="far fa-save"></i></button>
         </div> 
        `
        ;

    $("#dynamic-hours").append(newStuff);

};

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

$('.saveBtn').on('click', function(event) {
    event.preventDefault();

    var time = $(this).parent().attr("id");
    var task = $(this).siblings("textarea").val();
    console.log(task);

    localStorage.setItem(time, task);

    // saveTasks();
}); 


// var setTimeSlot = function() {
//     if (currentHour == "09") {
//         $(".hour-09").addClass("present");
//     } if (currentHour < "09") {
//         $(".hour-09").addClass("future");
//     } else {
//         $(".hour-09").addClass("past");
//     }
    
//     if (currentHour == "10") {
//         $(".hour-10").addClass("present");
//     } if (currentHour < "10") {
//         $(".hour-10").addClass("future");
//     } else {
//         $(".hour-10").addClass("past");
//     }

//     if (currentHour == "11") {
//         $(".hour-11").addClass("present");
//     } if (currentHour < "11") {
//         $(".hour-11").addClass("future");
//     } else {
//         $(".hour-11").addClass("past");
//     }

//     if (currentHour == "12") {
//         $(".hour-12").addClass("present");
//     } if (currentHour < "12") {
//         $(".hour-12").addClass("future");
//     } else {
//         $(".hour-12").addClass("past");
//     }

//     if (currentHour == "13") {
//         $(".hour-13").addClass("present");
//     } if (currentHour < "13") {
//         $(".hour-13").addClass("future");
//     } else {
//         $(".hour-13").addClass("past");
//     }

//     if (currentHour == "14") {
//         $(".hour-14").addClass("present");
//     } if (currentHour < "14") {
//         $(".hour-14").addClass("future");
//     } else {
//         $(".hour-14").addClass("past");
//     }

//     if (currentHour == "15") {
//         $(".hour-15").addClass("present");
//     } if (currentHour < "15") {
//         $(".hour-15").addClass("future");
//     } else {
//         $(".hour-15").addClass("past");
//     }

//     if (currentHour == "16") {
//         $(".hour-16").addClass("present");
//     } if (currentHour < "16") {
//         $(".hour-16").addClass("future");
//     } else {
//         $(".hour-16").addClass("past");
//     }

//     if (currentHour == "17") {
//         $(".hour-17").addClass("present");
//     } if (currentHour < "17") {
//         $(".hour-17").addClass("future");
//     } else {
//         $(".hour-17").addClass("past");
//     }

// }
// setTimeSlot();

