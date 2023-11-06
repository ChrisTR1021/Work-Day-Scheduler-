var currentDate = moment().format('ddd, MMM do YYYY');
$("currentday").html(currentDate);

$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var textEdit = $(this).siblings(".description").val();
    var timeLine = $(this).parent().attr("id");
    localStorage.setItem(textEdit, timeLine);
  })
}
