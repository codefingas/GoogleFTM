$(document).ready(function () {
  $('#file').focusout(function () {
	  var copy = $('#file').val().slice(12);
	  console.log(copy);
	  $('#file_name').val(copy);
  });
});