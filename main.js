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
		} else if (name.length < 6 || name.indexOf(' ') === -1 || !(0 < name.indexOf(' ') < name.length-1) {
			fullName.className = 'field-error';
			messageNameError.className = 'error';
			messageNameError.innerText = 'Invalid input. Your full name must be more than six characters long and ' +
			'contain at least one blank space in between'
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

		if (emailName === '') {
			email.className = 'field-error';
			messageEmailError.className = 'error';
			messageEmailError.innerText = 'This field is requiered';
		} else if (!(emailRegEx.test(emailName))) {
			email.className = 'field-error';
			messageEmailError.className = 'error';
			messageEmailError.innerText = 'Invalid input';
		} else {
			messageEmailError.className = 'hidden';
		}
	}
	
	email.addEventListener('blur', emailError);

	// Password filed validation

	var password = document.querySelector('#password');
	var messagePassError = document.querySelector('#password-error');

	function passError(e) {

		var passwordName = e.target.value;
		var passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

		if (passwordName === '') {
			password.className = 'field-error';
			messagePassError.className = 'error';
			messagePassError.innerText = 'This field is requiered';
		} else if (!(passwordRegEx.test(passwordName))) {
			password.className = 'field-error';
			messagePassError.className = 'error';
			messagePassError.innerText = 'Invalid input. The password must contains at least eight characters and ' +
			'include both numbers and letters'
		} else {
			messagePassError.className = 'hidden';
		}
	}	

	password.addEventListener('blur', passError);

	// Re-enter password validation
	
	var passwordConfirmation = document.querySelector('#password-confirmation');
	var messageConfirmationError = document.querySelector('#password-confirmation-error');

	function passConfirmation(e) {

		var passwordFirstEntry = password.value;
		var passwordConfirmationName = e.target.value;

		if (passwordConfirmationName === '') {
			passwordConfirmation.className = 'field-error';
			messageConfirmationError.className = 'error';
			messageConfirmationError.innerText = 'This field is requiered';
		} else if (passwordConfirmationName !== passwordFirstEntry) {
			passwordConfirmation.className = 'field-error';
			messageConfirmationError.className = 'error';
			messageConfirmationError.innerText = 'Passwords must match';
		} else {
			messageConfirmationError.className = 'hidden';
		}
	}

	passwordConfirmation.addEventListener('blur', passConfirmation);

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

	// Phone Number field validation

	var phone = document.querySelector('#phone');
	var messagePhoneError = document.querySelector('#phone-error');

	function phoneError(e) {

		var phoneNumber = e.target.value;
		 var phoneRegEx = /^[0-9]{7,}$/;
		 
		if (phoneNumber === "") {
			phone.className = 'field-error';
			messagePhoneError.className = 'error';
			messagePhoneError.innerText = 'This field is requiered';
		} else if (!(phoneRegEx.test(phoneNumber))) {
			phone.className = 'field-error';
			messagePhoneError.className = 'error';
			messagePhoneError.innerText = 'Invalid input. Phone must have a minimum length of seven digits and contain'+
			' only numbers';
		} else {
			messagePhoneError.className = 'hidden';
		}
	}

	phone.addEventListener('blur', phoneError);

	// Address field validation

	var address = document.querySelector('#address');
	var messageAddressError = document.querySelector('#address-error');
	

	function addressError(e) {

		var addressName = e.target.value;

		if (addressName === '') {
			address.className = 'field-error';
			messageAddressError.className = 'error';
			messageAddressError.innerText = 'This field is requiered';
		} else if (addressName.length < 5 || addressName.indexOf(' ') === -1 || !(0 < addressName.indexOf(' ') < addressName.length-1)) {
			address.className = 'field-error';
			messageAddressError.className = 'error';
			messageAddressError.innerText = 'Invalid input. Address must have a minimum length of five characters and' +
			' contain a blank space in between';
		} else {
			messageAddressError.className = 'hidden';
		}
	}

	address.addEventListener('blur', addressError);
}
