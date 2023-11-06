var currentDate = dayjs().format('ddd, MMM do YYYY');
$("#currentday").html(currentDate);

$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var textEdit = $(this).siblings(".description").val();
    var timeLine = $(this).parent().attr("id");
    localStorage.setItem(textEdit, timeLine);
  })
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function timeRecognized() {
    var timeCurrent = dayjs().hour();

    $(".time-block").each(function () {
      var scheduleBlock = parseInt($(this).attr("id").split("-")[1]);


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
