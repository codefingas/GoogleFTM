$(document).ready(function () {
  $('#file').focusout(function () {
	  var copy = $('#file').val();
	  $('#file_name').val(copy);
  });
	$('#reciepient_email').focusin(function () {
		var copy = $('#file').val();
	  	$('#file_name').val(copy);
	});
});