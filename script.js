
$(document).ready(function () {
  
  var currentDate = dayjs().format('dddd, MMMM D YYYY'); 
  // shows the current date
  $("#currentDay").text(currentDate);
  // saveBtn click function
  $(".saveBtn").on("click", function () {
    var textEdit = $(this).siblings(".description").val();
    var timeBlockHour= $(this).parent().attr("id");
    // saves in local storage
    localStorage.setItem(timeBlockHour, textEdit);
  })
  // getItems from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  function timeRecognized() {
    // gets current number of hours 
    var timeCurrent = dayjs().hour();

    $(".time-block").each(function () {
      var scheduleBlock = parseInt($(this).attr("id").split("-")[1]);

      // changes background display and adjust the current time
      if (scheduleBlock < timeCurrent) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      }
      else if (scheduleBlock === timeCurrent) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }
      else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }

    })
  }

  timeRecognized();
})
