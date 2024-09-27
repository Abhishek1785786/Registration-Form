// Event listener for form submission
document.getElementById('registration-form').onsubmit = function() {
    if (validateForm()) {
        alert('Form submitted successfully');
        return true;
    } else {
        alert('Please fill the form correctly');
        return false;
    }
}

// Event listener for submit button click
document.getElementById('submit-btn').addEventListener('click', function() {
    if (validateForm()) {
        alert('Form submitted successfully');
    } else {
        alert('Please fill the form correctly');
    }
})

// Event listener for name input change
document.getElementById('fullName').addEventListener('change', function() {
    validateName();
})

// Event listener for email input change
document.getElementById('email').addEventListener('change', function() {
    validateEmail();
})

// Event listener for phone number input change
document.getElementById('phoneNumber').addEventListener('change', function() {
    validatePhoneNumber();
})

// Event listener for password input change
document.getElementById('password').addEventListener('change', function() {
    validatePassword();
})

// Event listener for confirm password input change
document.getElementById('confirmPassword').addEventListener('change', function() {
    validateConfirmPassword();
})

// Function to validate name
function validateName() {
    const name = document.getElementById('fullName').value;
    if (name.length < 5) {
        alert('Name must be at least 5 characters long');
    }
}

// Function to validate email
function validateEmail() {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Invalid email address');
    }
}

// Function to validate phone number
function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber.length !== 10 || phoneNumber === '1234567890') {
        alert('Invalid phone number');
    }
}

// Function to validate password
function validatePassword() {
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
    }
}

// Function to validate confirm password
function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match');
    }
}

// Function to validate form
function validateForm() {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (name.length < 5 || !email.includes('@') || phoneNumber.length !== 10 || phoneNumber === '1234567890' || password.length < 8 || password !== confirmPassword) {
        return false;
    } else {
        return true;
    }
}

// Loop to validate form fields
function validateFormFields() {
    const formFields = ['fullName', 'email', 'phoneNumber', 'password', 'confirmPassword'];
    for (let i = 0; i < formFields.length; i++) {
        const field = document.getElementById(formFields[i]).value;
        if (field === '') {
            alert('Please fill all fields');
            return false;
        }
    }
    return true;
}