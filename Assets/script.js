$(document).ready(function () {
  $(function editAllowed() {
    $(".saveBtn").on("click", function () {
      var textEdit = $(this).siblings("descriptioin").val();
      var timeStated = $(this).parent().attr("id");
      localStorage.setItem(textEdit, timeStated);
    });

    $(".time-block").each(function () {
      var timeStated = $(this).attr("id");
      var textEdit = localStorage.getItem(timeStated);
      $(this).children(".description").val(textEdit);
    });

    function timeAdjust() {
      var todaysTime = dayjs().format("hh:mm:ss A");
      var todaysDate = dayjs().format("dddd, MMMM D, YYYY");
      var timeElement = $("#time");
      var dateElement = $("#date");
      timeElement.text(todaysTime);
      dateElement.text(todaysDate);
    }

    function colorBlock() {
      $(".time-block").each(function () {
        var hourSegment = parseInt(this.id);
        $(this).toggleClass("past", hourSegment < currentHour);
        $(this).toggleClass("present", hourSegment === currentHour);
        $(this).toggleClass("future", hourSegment > currentHour);
      });
    }
    
    }
  });
});

editAllowed();
