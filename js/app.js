$(document).ready(function(){

	event.preventDefault();
	viewData();

$("#save").click(function(){
	// alert("button clicked");

	var data = {};

	data["title"] = $trim($("#task_title").val());	
	data["name"] = $trim($("#task").val());



});

function viewData(){

	var list = "<ul><li id="headlist"></li><li id="tasklist"></li></ul>";


}

});