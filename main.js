window.onload = function () {
	// Name field validation

	var fullName = document.querySelector('#full-name');
	var messageNameError = document.querySelector('#name-error');
	
	function nameError() {
		var name = fullName.value;
		var nameHasNumber = hasNumber(name);
		
		if (name === '') {
			fullName.className = 'field-error';
			messageNameError.className = 'error';
			messageNameError.innerText = 'Full Name is required.';
		} else if (nameHasNumber || name.length < 6 || name.indexOf(' ') === -1 || !(0 < name.indexOf(' ') < name.length-1)) {
			fullName.className = 'field-error';
			messageNameError.className = 'error';
			messageNameError.innerText = 'Full name: Invalid input. Full name must be more than six characters long, no 
			+ ' numbers and contain at least one blank space in between.'
		} else {
			messageNameError.className = 'hidden';
		} 
	}
	fullName.addEventListener('blur', nameError);

	function fixNameError() {
		fullName.className = 'input-field';
		messageNameError.className = 'hidden';
	}
	fullName.addEventListener('focus', fixNameError);

	// Email field validation

	var email = document.querySelector('#email');
	var messageEmailError = document.querySelector('#email-error');

	function emailError() {
		var emailName = email.value;
		var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (emailName === '') {
			email.className = 'field-error';
			messageEmailError.className = 'error';
			messageEmailError.innerText = 'Email is required.';
		} else if (!(emailRegEx.test(emailName))) {
			email.className = 'field-error';
			messageEmailError.className = 'error';
			messageEmailError.innerText = 'Invalid email.';
		} else {
			messageEmailError.className = 'hidden';
		}
	}	
	email.addEventListener('blur', emailError);

	function fixEmailError() {
		email.className = 'input-field';
		messageEmailError.className = 'hidden';
	}
	email.addEventListener('focus', fixEmailError);

	// Password filed validation

	var password = document.querySelector('#password');
	var messagePassError = document.querySelector('#password-error');

	function passwordError() {
		var passwordName = password.value;
		var passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

		if (passwordName === '') {
			password.className = 'field-error';
			messagePassError.className = 'error';
			messagePassError.innerText = 'The Password field is required.';
		} else if (!(passwordRegEx.test(passwordName))) {
			password.className = 'field-error';
			messagePassError.className = 'error';
			messagePassError.innerText = 'Invalid input. The password must contains at least eight characters and ' +
			'include both numbers and letters.'
		} else {
			messagePassError.className = 'hidden';
		}
	}	
	password.addEventListener('blur', passwordError);

	function fixPassError() {
		password.className = 'input-field';
		messagePassError.className = 'hidden';
	}
	password.addEventListener('focus', fixPassError);

	// Re-enter password validation
	
	var passwordConfirmation = document.querySelector('#password-confirmation');
	var messageConfirmationError = document.querySelector('#password-confirmation-error');

	function passwordConfirmationError() {
		var passwordFirstEntry = password.value;
		var passwordConfirmationName = passwordConfirmation.value;

		if (passwordConfirmationName === '') {
			passwordConfirmation.className = 'field-error';
			messageConfirmationError.className = 'error';
			messageConfirmationError.innerText = 'Confirm password is required.';
		} else if (passwordConfirmationName !== passwordFirstEntry) {
			passwordConfirmation.className = 'field-error';
			messageConfirmationError.className = 'error';
			messageConfirmationError.innerText = 'Passwords must match.';
		} else {
			messageConfirmationError.className = 'hidden';
		}
	}
	passwordConfirmation.addEventListener('blur', passwordConfirmationError);

	function fixPassConfirmationError() {
		passwordConfirmation.className = 'input-field';
		messageConfirmationError.className = 'hidden';
	}
	passwordConfirmation.addEventListener('focus', fixPassConfirmationError);

	// Age field validation

	var age = document.querySelector('#age');
	var messageAgeError = document.querySelector('#age-error');

	function ageError() {
		var ageNumber = age.value;
		if (ageNumber === '') {
			age.className = 'field-error';
			messageAgeError.className = 'error';
			messageAgeError.innerText = 'Age specification is required.';
		} else if (!Number.isInteger(ageNumber) && ageNumber < 18) {
			age.className = 'field-error';
			messageAgeError.className = 'error';
			messageAgeError.innerText = 'Invalid input. Age must be a number greater than 18.';
		} else {
			messageAgeError.className = 'hidden';
		}
	}
	age.addEventListener('blur', ageError);

	function fixAgeError() {
		age.className = 'input-field';
		messageAgeError.className = 'hidden';
	}
	age.addEventListener('focus', fixAgeError);

	// Phone Number field validation

	var phone = document.querySelector('#phone');
	var messagePhoneError = document.querySelector('#phone-error');

	function phoneError() {
		var phoneNumber = phone.value;
		 var phoneRegEx = /^[0-9]{7,}$/;

		if (phoneNumber === '') {
			phone.className = 'field-error';
			messagePhoneError.className = 'error';
			messagePhoneError.innerText = 'Phone number is required.';
		} else if (!(phoneRegEx.test(phoneNumber))) {
			phone.className = 'field-error';
			messagePhoneError.className = 'error';
			messagePhoneError.innerText = 'Invalid input. Phone must have a minimum length of seven digits and contain'+
			' only numbers.';
		} else {
			messagePhoneError.className = 'hidden';
		}
	}
	phone.addEventListener('blur', phoneError);

	function fixPhoneError() {
		phone.className = 'input-field';
		messagePhoneError.className = 'hidden';
	}
	phone.addEventListener('focus', fixPhoneError);

	// Address field validation

	var address = document.querySelector('#address');
	var messageAddressError = document.querySelector('#address-error');
	
	function addressError() {
		var addressName = address.value;

		if (addressName === '') {
			address.className = 'field-error';
			messageAddressError.className = 'error';
			messageAddressError.innerText = 'Address is required.';
		} else if (addressName.length < 5 || addressName.indexOf(' ') === -1 || !(0 < addressName.indexOf(' ') < addressName.length-1)) {
			address.className = 'field-error';
			messageAddressError.className = 'error';
			messageAddressError.innerText = 'Invalid input. Address must have a minimum length of five characters and' +
			' contain a blank space in between.';
		} else {
			messageAddressError.className = 'hidden';
		}
	}

	address.addEventListener('blur', addressError);

	function fixAddressError() {
		address.className = 'input-field';
		messageAddressError.className = 'hidden';
	}
	address.addEventListener('focus', fixAddressError);

	// City field validation

	var city = document.querySelector('#city');
	var messageCityError = document.querySelector('#city-error');
	

	function cityError() {

		var cityName = city.value;
		var cityHasNumber = hasNumber(cityName);

		if (cityName === '') {
			city.className = 'field-error';
			messageCityError.className = 'error';
			messageCityError.innerText = 'City specification is required.';
		} else if (cityHasNumber || cityName.length < 3) {
			city.className = 'field-error';
			messageCityError.className = 'error';
			messageCityError.innerText = 'Invalid input. City must have at least three characters.'
		} else {
			messageCityError.className = 'hidden';
		}
	}
		
	function hasNumber(fieldInput) {
		var num = "012345679";
		num_found = false;

		for (var i = 0; i < fieldInput.length; i++) {
		  if (num.includes(fieldInput[i])) {
			num_found = true;
		  }
		}
		return num_found;
	}
	city.addEventListener('blur', cityError);

	function fixCityError() {
		city.className = 'input-field';
		messageCityError.className = 'hidden';
	}
	city.addEventListener('focus', fixCityError);

	// Postal-Code field validation

	var postalCode = document.querySelector('#postal-code');
	var messagePostalError = document.querySelector('#postal-error');
	
	function postalCodeError() {
		var postalCodeName = postalCode.value;

		if (postalCodeName === '') {
			postalCode.className = 'field-error';
			messagePostalError.className = 'error';
			messagePostalError.innerText = 'Postal Code is required.';
		} else if (postalCodeName.length < 3) {
			postalCode.className = 'field-error';
			messagePostalError.className = 'error';
			messagePostalError.innerText = 'Invalid input. Postal Code must have at least three characters.'
		} else {
			messagePostalError.className = 'hidden';
		}
	}
	postalCode.addEventListener('blur', postalCodeError);

	function fixPostalError() {
		postalCode.className = 'input-field';
		messagePostalError.className = 'hidden';
	}
	postalCode.addEventListener('focus', fixPostalError);

	// DNI field validation

	var dniNumber = document.querySelector('#dni');
	var messageDniError = document.querySelector('#dni-error');
	
	function dniError() {
		var dniName = dniNumber.value;

		if (dniName === '') {
			dniNumber.className = 'field-error';
			messageDniError.className = 'error';
			messageDniError.innerText = 'DNI number is required.';
		} else if (dniName.toString().length !== 8 && dniName.toString().length !== 7) {
			dniNumber.className = 'field-error';
			messageDniError.className = 'error';
			messageDniError.innerText = 'Invalid input. DNI number must have seven or eight digits.'
		} else {
			messageDniError.className = 'hidden';
		}
	}
	dniNumber.addEventListener('blur', dniError);

	function fixDniError() {
		dniNumber.className = 'input-field';
		messageDniError.className = 'hidden';
	}
	dniNumber.addEventListener('focus', fixDniError);

	// Submit form

	var button = document.querySelector('#button');

	var errorSpanIdsArray = [
		'name-error',
		'email-error',
		'password-error',
		'password-confirmation-error',
		'age-error',
		'phone-error',
		'address-error',
		'city-error',
		'postal-error',
		'dni-error',
	];

	var inputsIdsArray = [
		'full-name',
		'email',
		'password',
		'password-confirmation',
		'age',
		'phone',
		'address',
		'city',
		'postal-code',
		'dni',
	];

	function send(e) {
		e.preventDefault();

		nameError();
		emailError();
		passwordError();
		passwordConfirmationError();
		ageError();
		phoneError();
		addressError();
		cityError();
		postalCodeError();
		dniError();
	
		var errorTextAccumulator = '';

		errorSpanIdsArray.forEach(function(errorSpanId) {
			var errorText = document.getElementById(errorSpanId).innerText;
			if (errorText) {
				errorTextAccumulator += errorText + "\n";
			}
		})

		if (errorTextAccumulator.length > 0) {
			alert(errorTextAccumulator);
		} else {
			var fieldValuesAccumulator = '';
			inputsIdsArray.forEach(function(inputId) {
				var fieldValue = document.getElementById(inputId).value;
				fieldValuesAccumulator += fieldValue + "\n";
			})
			alert(fieldValuesAccumulator);
		}
	}
	button.addEventListener('click', send);


	// Bonus
	var headingAccordingToName = document.getElementById('heading-according-to-name');

	function writeHeading() {
		headingAccordingToName.innerText = 'HOLA '+ fullName.value.toUpperCase();
	}

	fullName.addEventListener('keyup', writeHeading);
	fullName.addEventListener('focus', writeHeading); 
}

