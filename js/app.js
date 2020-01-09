$(document).ready(function() {
  $("#task").on("keypress", function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      addtask();
    }
  });

  $(document).on("click", ".delete-todo", function() {
    var id = $(this)
      .attr("id")
      .replace("remove_", "");
    // alert("Delete transaction #" + transaction_id);
    $("#item_" + id).remove();
  });

  $(document).on("click", ".main-task", function() {
    var id = $(this)
      .attr("id")
      .replace("main_task_", "");
    // alert("Delete transaction #" + transaction_id);
    $("#main_task_" + id).addClass("completed");
  });
});

function addtask() {
  let task = $("#task").val();
  if (task !== "") {
    count = $("#task-list li").length + 1;

    var li =
      "<li class='task' id='item_" +
      count +
      "'><span class='delete-todo' id='remove_" +
      count +
      "'>X</span><span class='main-task' id='main_task_" +
      count +
      "'>" +
      task +
      "</span></li>";

    $("#task-list").append(li);
    $("#task").val("");
  }
}
