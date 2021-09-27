// current date
var currentDay = document.querySelector("#current-day");
currentDay.textContent = moment().format('dddd, MMMM Do');

var currentMoment = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentHour = moment().format('HH');

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

    var formattedTimes = ["", "", "", "", "", "", "", "", "", "9AM", "10AM", "11AM", "12 Noon", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"];

    var dyanamicTimeSlots =
        `<div class="row" id='hour-${i}'>
                <span class="hour col-md-1" id='label-${i}'>${formattedTimes[i]}</span>
                <textarea class="col-md-10 past textarea${i} hour-${i}"></textarea>
                <button class="btn col-md-1 saveBtn"><i class="far fa-save"></i></button>
         </div> 
        `;

    $("#dynamic-hours").append(dyanamicTimeSlots);

};

// var $times = [];
// $('span').each(function(){
//     var id = $(this).attr('id');
//     $times.push(id);

//     console.log($times);
//     console.log(typeof $times);
// });

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
    console.log(time, task);

    localStorage.setItem(time, task);

}); 

var setTimeSlot = function() {
    for (var i = 9; i <= 17; i++) {
        $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
    }
}

setTimeSlot();
// var fixLabel9 = document.querySelector("#label-9");
// fixLabel9.textContent = "9AM";

// var fixLabel10 = document.querySelector("#label-10");
// fixLabel10.textContent = "10AM";

// var fixLabel11 = document.querySelector("#label-11");
// fixLabel11.textContent = "11AM";

// var fixLabel12 = document.querySelector("#label-12");
// fixLabel12.textContent = "Noon";

// var fixLabel13 = document.querySelector("#label-13");
// fixLabel13.textContent = "1PM";

// var fixLabel14 = document.querySelector("#label-14");
// fixLabel14.textContent = "2PM";

// var fixLabel15 = document.querySelector("#label-15");
// fixLabel15.textContent = "3PM";

// var fixLabel16 = document.querySelector("#label-16");
// fixLabel16.textContent = "4PM";

// var fixLabel17 = document.querySelector("#label-17");
// fixLabel17.textContent = "5PM";
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

