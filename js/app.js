$(document).ready(function() {
  $("#task").on("keypress", function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      addtask();
    }
  });
});

function addtask() {
  let task = $("#task").val();
  if (task !== "") {
    var li =
      "<li class='task'><span class='delete-todo'>X</span><span class='main-task'>" +
      task +
      "</span></li>";
    $("#task-list").append(li);
    $("#task").val("");
  }
}

$("li").on("click", function() {
  $(this).toggoleClass("completed");
}); //end li click event

$("span").on("click", function(event) {
  $(this)
    .parent()
    .fadeOut()
    .remove();
  event.stopPropagation();
});
