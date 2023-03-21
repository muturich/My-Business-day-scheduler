//Use the moment.js library to retrieve the current data and format to be
//be displayed on the web page using web Jquery 

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
 //Use Jquery to select all the elemetns with the class "saveBth" and add a click event listen to them
    $(".saveBtn").on("click", function () {
  
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
       
        var timeNow = moment().hour();

//this block iterates over each time-block element and adds the classes"past",
//"present"or"future"depending on whether the block's time is earlier,equal, or later than the current time.
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
//this sets the values of the description fields in each time-block from the values stored in the 
//browser's local storage, and calls the timeTracker() function.

    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})