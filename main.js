window.onload = function () {
	// Name field validation

	var fullName = document.querySelector('#full-name');
	var messageNameError = document.querySelector('#name-error');
	
	function nameValidation() {
		var nameValue = fullName.value;
		var nameHasNumber = hasNumber(nameValue);
		
		if (nameValue === '') {
			fullName.className = 'field-error';
			messageNameError.className = 'error';
			messageNameError.innerText = 'Full Name is required.';
		} else if (nameHasNumber || nameValue.length < 6 || nameValue.indexOf(' ') === -1 || !(0 < nameValue.indexOf(' ') < nameValue.length-1)) {
			fullName.className = 'field-error';
			messageNameError.className = 'error';
			messageNameError.innerText = 'Full name: Invalid input. Full name must be more than six characters, no numbers, ' +
			'and contain at least one blank space in between.'
		} else {
			messageNameError.className = 'hidden';
		} 
	}
	fullName.addEventListener('blur', nameValidation);

	function fixNameError() {
		fullName.className = 'input-field';
		messageNameError.className = 'hidden';
	}
	fullName.addEventListener('focus', fixNameError);

	// Email field validation

	var email = document.querySelector('#email');
	var messageEmailError = document.querySelector('#email-error');

	function emailValidation() {
		var emailValue = email.value;
		var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (emailValue === '') {
			email.className = 'field-error';
			messageEmailError.className = 'error';
			messageEmailError.innerText = 'Email is required.';
		} else if (!(emailRegEx.test(emailValue))) {
			email.className = 'field-error';
			messageEmailError.className = 'error';
			messageEmailError.innerText = 'Email: invalid input.';
		} else {
			messageEmailError.className = 'hidden';
		}
	}	
	email.addEventListener('blur', emailValidation);

	function fixEmailError() {
		email.className = 'input-field';
		messageEmailError.className = 'hidden';
	}
	email.addEventListener('focus', fixEmailError);

	// Password filed validation

	var password = document.querySelector('#password');
	var messagePassError = document.querySelector('#password-error');

	function passwordValidation() {
		var passwordValue = password.value;
		var passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

		if (passwordValue === '') {
			password.className = 'field-error';
			messagePassError.className = 'error';
			messagePassError.innerText = 'Password is required.';
		} else if (!(passwordRegEx.test(passwordValue))) {
				password.className = 'field-error';
				messagePassError.className = 'error';
				messagePassError.innerText = 'Password: Invalid input. The password must contains at least eight characters ' +
				'and include both numbers and letters.'	
		} else {
			messagePassError.className = 'hidden';
		}
	}	
	password.addEventListener('blur', passwordValidation);

	function fixPassError() {
		password.className = 'input-field';
		messagePassError.className = 'hidden';
	}
	password.addEventListener('focus', fixPassError);

	// Re-enter password validation
	
	var passwordConfirmation = document.querySelector('#password-confirmation');
	var messagePasswordConfirmationError = document.querySelector('#password-confirmation-error');

	function passwordConfirmationValidation() {
		var passwordFirstEntryValue = password.value;
		var passwordConfirmationValue = passwordConfirmation.value;

		if (passwordConfirmationValue === '') {
			passwordConfirmation.className = 'field-error';
			messagePasswordConfirmationError.className = 'error';
			messagePasswordConfirmationError.innerText = 'Confirm password is required.';
		} else if (passwordConfirmationValue !== passwordFirstEntryValue) {
			passwordConfirmation.className = 'field-error';
			messagePasswordConfirmationError.className = 'error';
			messagePasswordConfirmationError.innerText = 'Password confirmation: invalid input. Passwords must match.';
		} else {
			messagePasswordConfirmationError.className = 'hidden';
		}
	}
	passwordConfirmation.addEventListener('blur', passwordConfirmationValidation);

	function fixPasswordConfirmationError() {
		passwordConfirmation.className = 'input-field';
		messagePasswordConfirmationError.className = 'hidden';
	}
	passwordConfirmation.addEventListener('focus', fixPasswordConfirmationError);

	// Age field validation

	var age = document.querySelector('#age');
	var messageAgeError = document.querySelector('#age-error');

	function ageValidation() {
		var ageValue = age.value;
		if (ageValue === '') {
			age.className = 'field-error';
			messageAgeError.className = 'error';
			messageAgeError.innerText = 'Age is required.';
		} else if (!Number.isInteger(ageValue) && ageValue < 18) {
			age.className = 'field-error';
			messageAgeError.className = 'error';
			messageAgeError.innerText = 'Age: Invalid input. Age must be a number greater than 18.';
		} else {
			messageAgeError.className = 'hidden';
		}
	}
	age.addEventListener('blur', ageValidation);

	function fixAgeError() {
		age.className = 'input-field';
		messageAgeError.className = 'hidden';
	}
	age.addEventListener('focus', fixAgeError);

	// Phone Number field validation

	var phone = document.querySelector('#phone');
	var messagePhoneError = document.querySelector('#phone-error');

	function phoneValidation() {
		var phoneValue = phone.value;
		 var phoneRegEx = /^[0-9]{7,}$/;

		if (phoneValue === '') {
			phone.className = 'field-error';
			messagePhoneError.className = 'error';
			messagePhoneError.innerText = 'Phone Number is required.';
		} else if (!(phoneRegEx.test(phoneValue))) {
			phone.className = 'field-error';
			messagePhoneError.className = 'error';
			messagePhoneError.innerText = 'Phone Number: Invalid input. Phone must have a minimum length of seven digits and ' +
			'contain only numbers.';
		} else {
			messagePhoneError.className = 'hidden';
		}
	}
	phone.addEventListener('blur', phoneValidation);

	function fixPhoneError() {
		phone.className = 'input-field';
		messagePhoneError.className = 'hidden';
	}
	phone.addEventListener('focus', fixPhoneError);

	// Address field validation

	var address = document.querySelector('#address');
	var messageAddressError = document.querySelector('#address-error');
	
	function addressValidation() {
		var addressValue = address.value;

		if (addressValue === '') {
			address.className = 'field-error';
			messageAddressError.className = 'error';
			messageAddressError.innerText = 'Address is required.';
		} else if (addressValue.length < 5 || addressValue.indexOf(' ') === -1 || !(0 < addressValue.indexOf(' ') < addressValue.length-1)) {
			address.className = 'field-error';
			messageAddressError.className = 'error';
			messageAddressError.innerText = 'Address: invalid input. Address must have a minimum length of five characters and' +
			' contain a blank space in between.';
		} else {
			messageAddressError.className = 'hidden';
		}
	}
	address.addEventListener('blur', addressValidation);

	function fixAddressError() {
		address.className = 'input-field';
		messageAddressError.className = 'hidden';
	}
	address.addEventListener('focus', fixAddressError);

	// City field validation

	var city = document.querySelector('#city');
	var messageCityError = document.querySelector('#city-error');
	

	function cityValidation() {

		var cityValue = city.value;
		var cityHasNumber = hasNumber(cityValue);

		if (cityValue === '') {
			city.className = 'field-error';
			messageCityError.className = 'error';
			messageCityError.innerText = 'City is required.';
		} else if (cityHasNumber || cityValue.length < 3) {
			city.className = 'field-error';
			messageCityError.className = 'error';
			messageCityError.innerText = 'City: Invalid input. City must have at least three characters and no numbers.'
		} else {
			messageCityError.className = 'hidden';
		}
	}
		
	function hasNumber(fieldValue) {
		var number = "012345679";
		number_found = false;

		for (var i = 0; i < fieldValue.length; i++) {
		  if (number.includes(fieldValue[i])) {
			number_found = true;
		  }
		}
		return number_found;
	}
	city.addEventListener('blur', cityValidation);

	function fixCityError() {
		city.className = 'input-field';
		messageCityError.className = 'hidden';
	}
	city.addEventListener('focus', fixCityError);

	// Postal-Code field validation

	var postalCode = document.querySelector('#postal-code');
	var messagePostalCodeError = document.querySelector('#postal-code-error');
	
	function postalCodeValidation() {
		var postalCodeValue = postalCode.value;

		if (postalCodeValue === '') {
			postalCode.className = 'field-error';
			messagePostalCodeError.className = 'error';
			messagePostalCodeError.innerText = 'Postal Code is required.';
		} else if (postalCodeValue.length < 3) {
			postalCode.className = 'field-error';
			messagePostalCodeError.className = 'error';
			messagePostalCodeError.innerText = 'Postal Code: Invalid input. Postal Code must have at least three characters.'
		} else {
			messagePostalCodeError.className = 'hidden';
		}
	}
	postalCode.addEventListener('blur', postalCodeValidation);

	function fixPostalCodeError() {
		postalCode.className = 'input-field';
		messagePostalCodeError.className = 'hidden';
	}
	postalCode.addEventListener('focus', fixPostalCodeError);

	// DNI field validation

	var dniNumber = document.querySelector('#dni');
	var messageDniError = document.querySelector('#dni-error');
	
	function dniValidation() {
		var dniValue = dniNumber.value;

		if (dniValue === '') {
			dniNumber.className = 'field-error';
			messageDniError.className = 'error';
			messageDniError.innerText = 'DNI Number is required.';
		} else if (dniValue.toString().length !== 8 && dniValue.toString().length !== 7) {
			dniNumber.className = 'field-error';
			messageDniError.className = 'error';
			messageDniError.innerText = 'ID Number - DNI: Invalid input. DNI number must have seven or eight digits.'
		} else {
			messageDniError.className = 'hidden';
		}
	}
	dniNumber.addEventListener('blur', dniValidation);

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
		'postal-code-error',
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

		nameValidation();
		emailValidation();
		passwordValidation();
		passwordConfirmationValidation();
		ageValidation();
		phoneValidation();
		addressValidation();
		cityValidation();
		postalCodeValidation();
		dniValidation();
		
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

