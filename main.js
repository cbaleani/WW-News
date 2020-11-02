window.onload = function () {

	// Name field validation
	var fullName = document.querySelector('#full-name');
	var messageNameError = document.querySelector('#name-error');
	
	function fullNameError(e) {

		var name = e.target.value;

		if (name === '') {
			fullName.className = 'field-error';
			messageNameError.className = 'error';
			messageNameError.innerText = 'This field is requiered';
		} else if ((name.length < 6) || name.indexOf(' ') === -1 || !isNaN(name)) {
			fullName.className = 'field-error';
			messageNameError.className = 'error';
			messageNameError.innerText = 'Invalid input. Your full name must be more than six characters long and contain at'+ 
			'least one blank space in between.'
		} else {
			messageNameError.className = 'hidden';
		} 
	}

	fullName.addEventListener('blur', fullNameError);

	// Email field validation
	var email = document.querySelector('#email');
	var messageEmailError = document.querySelector('#email-error');

	function emailError(e) {
		var emailName = e.target.value;
		var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (!(emailRegEx.test(emailName))) {
			email.className = 'field-error';
			messageEmailError.className = 'error';
			messageEmailError.innerText = 'Invalid input';
		}else {
			messageEmailError.className = 'hidden';
		}
	}
	
	email.addEventListener('blur', emailError);

	// Password filed validation
	var password = document.querySelector('#password');
	var messagePassError = document.querySelector('#password-error');
	function passError(e) {
		var passwordName = e.target.value;
		var passwordRegEx = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
		if (!(passwordRegEx.test(passwordName))) {
			password.className = 'field-error';
			messagePassError.className = 'error';
			messagePassError.innerText = 'Invalid input. The password must contains at least eight characters and include both'
			+'numbers and letters.'
		} else {
			messagePassError.className = 'hidden';
		}
	}	

	password.addEventListener('blur', passError);

	// Age field validation
	var age = document.querySelector('#age');
	var messageAgeError = document.querySelector('#age-error');

	function ageError(e) {
		var ageNumber = e.target.value;
		if (!Number.isInteger(ageNumber) && ageNumber < 18) {
			age.className = 'field-error';
			messageAgeError.className = 'error';
			messageAgeError.innerText = 'Invalid input. Age must be an integer number and greater than 18.';
		} else {
			messageAgeError.className = 'hidden';
		}
	}
	age.addEventListener('blur', ageError);
}
