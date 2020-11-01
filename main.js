window.onload = function () {
	
	var fullName = document.getElementById('full-name');
	var spanError = document.querySelector('#name-error');
	
	function fullNameError(e) {

		name = e.target.value;

		if ((name.length >= 1 && name.length < 6) || name.indexOf(' ') === -1 || !isNaN(name)) {
			fullName.className = "field-error";
			spanError.className = 'error';
			spanError.innerText = 'Invalid input. Your full name must be more than six characters long and contain at least' +
			' one blank space in between.'
		} else if (name === "") {
			fullName.className = "field-error";
			spanError.className = 'error';
			spanError.innerText = 'This field is requiered';
		} else {
			spanError.className = 'hide-span';
		} 
	}

	fullName.addEventListener('blur', fullNameError);
};

