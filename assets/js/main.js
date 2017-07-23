$(document).ready(function () {
	
	/*==catching the form feedback==*/
	var msg = $('#form_feedback');
	/*==End of catching the form feedback==*/
	
	/*==Regex that compares the value of the Email input==*/
	var confirmEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	/*==End of Regex that compares the value of the Email input==*/
	
	/*==Function that gets fired when the spacebar is pressed==*/
	 function spaceHandler(e){
		if(e.charCode == 32){
			e.preventDefault();
			$('#form_feedback').text('*spaces are not allowed').css('color', '#D00');
		} else {
			$('#form_feedback').text('').css('color', '#D00');
		}
	 };
	/*==End of Function that gets fired when the spacebar is pressed==*/
	
	/*==Getting the Username field and giving its response==*/
	$('#username').focusin(function () {
		
		msg.text('Go on Enter a username').css('color', 'lightgreen');
		
	}).on('keypress', spaceHandler).blur(function () {
		/*==checking and verifying the length of the string==*/
		if ($('#username').val().length <= 4) {
			msg.text('*Username must be at least five characters long').css('color', '#D00');
		} else {
			msg.text('');
		};
		/*==End of checking and verifying the length of the string==*/
	});
	/*==End of Getting the Username field and giving its response==*/
	
	/*==Getting and verifying the input of an email==*/
	$('#email').focusin(function () {
		msg.text('Go on Enter your email').css('color', 'lightgreen');
	}).on('keypress', spaceHandler).blur(function () {
		if (!confirmEmail.test($('#email').val())) {
			msg.text('Bad Email!-- Ensure that @"emailservice".com is included').css('color', '#D00');
		} else {
			msg.text('');
		};
		
	});
	/*==End of Getting and verifying the input of an email==*/
	
	/*==catching the password field and passing appropriate text to the password==*/
	$('#password').focusin(function () {
		msg.text('Go on Enter a password -- trying using a mixture of letters and numbers to make it more secure').css('color', 'lightgreen');
	}).on('keypress', spaceHandler).blur(function () {
		if ($('#password').val().length <= 4) {
			msg.text('*password must be at least five characters long-- trying using a mixture of letters and numbers to make it more secure').css('color', '#D00');
		} else {
			msg.text('');
		};
	});
	/*==End of catching the password field and passing appropriate text to the password==*/
	
	/*===Catching  the confirm password field and verifying comparism==*/
	$('#password2').focusin(function () {
		msg.text('Re-Enter password').css('color', 'lightgreen');
	}).on('keypress', spaceHandler).blur(function () {
		if($('#password2').val() != $('#password').val()) {
			msg.text('*passwords do not match').css('color', '#D00');
		} else {
			msg.text('passwords okay').css('color', 'lightgreen');
		};
	});
	/*===End of Catching  the confirm password field and verifying comparism==*/
	
	
		/*== final callback on form submit==*/
		function scan () {
			if ($('#username').val().length <= 4) {
				msg.text('*Username must be at least five characters long').css('color', '#D00');
			} else if (!confirmEmail.test($('#email').val())) {
				msg.text('Bad Email!-- Ensure that @"emailservice".com is included').css('color', '#D00');
			} else if ($('#password').val().length <= 4) {
				msg.text('*password must be at least five characters long-- trying using a mixture of letters and numbers to make it more secure').css('color', '#D00');
			} else if($('#password2').val() != $('#password').val()) {
				msg.text('*passwords do not match').css('color', '#D00');
			} else {
				$('#form_section').hide('slow');
			}
		};
		/*==End of final callback on form submit==*/
	
	
	/*==Function that does the final check on submit==*/
		$("#submit").on('click', scan).on('blur', function () {
			msg.text('Everything is okay here');
		});
	/*==End of function that does the final check on submit==*/
});