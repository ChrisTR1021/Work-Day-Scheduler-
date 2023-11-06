var currentDate = moment().format('ddd, MMM do YYYY');
$("currentday").html(currentDate);

$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var textEdit = $(this).siblings(".description").val();
    var timeLine = $(this).parent().attr("id");
    localStorage.setItem(textEdit, timeLine);
  })

  function timeRecognized() {
    var timeCurrent = moment().hour();

    $("time-block").each(function () {
      var scheduleBlock = parseInt($(this).attr("id").split("hour")[1]);


      if (scheduleBlock < timeCurrent) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      }
      
    }
  }
}
