$(document).ready(function() {
  var id = 0;
  var taskList = [];
  // localStorage.clear();
  if (!localStorage.getItem("total")) {
    localStorage.setItem("total", id);
  } else {
    id = localStorage.getItem("total");
  }

  if (!localStorage.getItem("taskList")) {
    localStorage.setItem("taskList", taskList);
  } else {
    taskList = JSON.parse(localStorage.getItem("taskList"));
  }

  $("#task").on("keypress", function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      addtask();
    }
  });

  generatedList();

  $(document).on("click", ".delete-todo", function() {
    var id = $(this)
      .attr("id")
      .replace("remove_", "");

    $("#item_" + id).remove();
    var newTask = taskList.filter(function(task) {
      return task.id != id;
    });
    addItemToLocalStorage(newTask);
    console.log(newTask);
  });

  $(document).on("click", ".main-task", function() {
    var id = $(this)
      .attr("id")
      .replace("main_task_", "");
    // alert("Delete transaction #" + transaction_id);
    $("#main_task_" + id).toggleClass("completed");

    var newData = taskList.map(el => {
      if (el.id == id) {
        console.log(el);
        if (el.completed == false) {
          // alert("haha");
          return Object.assign({}, el, { completed: true });
        } else {
          // alert("false");
          return Object.assign({}, el, { completed: false });
        }
      }
      return el;
    });

    addItemToLocalStorage(newData);
    console.log(taskList);
  });

  function addtask() {
    let task = $("#task").val();
    if (task !== "") {
      id++;
      // localStorage.setItem("total", id);
      var item = {
        id: id,
        title: task,
        completed: false,
        date: new Date()
      };

      // alert(localStorage.getItem("total"));

      taskList.push(item);
      addItemToLocalStorage(taskList);
      var li =
        "<li class='task' id='item_" +
        id +
        "'><span class='delete-todo' id='remove_" +
        id +
        "'>X</span><span class='main-task' id='main_task_" +
        id +
        "'>" +
        task +
        "</span></li>";

      $("#task-list").append(li);
      $("#task").val("");
    }
  }

  function addItemToLocalStorage(taskList) {
    localStorage.removeItem("taskList");
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  function generatedList() {
    var lists = JSON.parse(localStorage.getItem("taskList"));
    lists.map(list => {
      var li =
        "<li class='task' id='item_" +
        list.id +
        "'><span class='delete-todo' id='remove_" +
        list.id +
        "'>X</span><span class='main-task' id='main_task_" +
        list.id +
        "'>" +
        list.title +
        "</span></li>";
      $("#task-list").append(li);
    });
  }
});
