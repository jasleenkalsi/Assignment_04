document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    clearErrors(); // Clear any previous error messages

    let isValid = true; // Flag to track overall validity

// Validate each field
    if (!isNotEmpty('name')) isValid = false;
    if (!isValidEmail('email')) isValid = false;
    if (!hasCheckedOption('color')) isValid = false;
    if (!isSelected('options')) isValid = false;
    if (!isValidUsername('username')) isValid = false;
    if (!isValidCustomId('customId')) isValid = false;

    // If all validations pass, submit the form
    if (isValid) {
        this.submit();
    }
});

// Function to check if an input is not empty
function isNotEmpty(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.value.trim() === '') {
        showError(fieldId, 'This field cannot be empty.');
        return false;
    }
    return true;
}

// Function to validate email format
function isValidEmail(fieldId) {
    const field = document.getElementById(fieldId);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
        showError(fieldId, 'Please enter a valid email address.');
        return false;
    }
    return true;
}

// Function to check if a radio button is selected
function hasCheckedOption(groupName) {
    const radios = document.getElementsByName(groupName);
    for (let radio of radios) {
        if (radio.checked) {
            return true;
        }
    }
    showError('colorError', 'Please select a color.');
    return false;
}

// Function to check if a dropdown option is selected
function isSelected(selectId) {
    const select = document.getElementById(selectId);
    if (select.value === '') {
        showError(selectId, 'Please select an option.');
        return false;
    }
    return true;
}

// Function to validate username format (alphanumeric)
function isValidUsername(fieldId) {
    const field = document.getElementById(fieldId);
    const usernameRegex = /^[a-zA-Z0-9]+$/; // Example regex for alphanumeric
    if (!usernameRegex.test(field.value)) {
        showError(fieldId, 'Username must be alphanumeric.');
        return false;
    }
    return true;
}

// Function to validate custom ID format (ABC-1234)
function isValidCustomId(fieldId) {
    const field = document.getElementById(fieldId);
    const customIdRegex = /^[A-Z]{3}-\d{4}$/; // Example regex for format
    if (!customIdRegex.test(field.value)) {
        showError(fieldId, 'Custom ID must be in the format ABC-1234.');
        return false;
    }
    return true;
}

// Function to display error messages
function showError(fieldId, message) {
    const errorField = document.getElementById(fieldId + 'Error');
    errorField.textContent = message;
}

// Function to clear error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.textContent = '');
}
