document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Validate fields
    let isValid = true;

    if (!isNotEmpty('name')) {
        isValid = false;
    }
    if (!isValidEmail('email')) {
        isValid = false;
    }
    if (!isNotEmpty('username')) {
        isValid = false;
    }
    if (!hasCheckedOption('source')) {
        isValid = false;
    }
    if (!isValidDate('visitDate')) {
        isValid = false;
    }

    // If valid, show success message and submit the form
    if (isValid) {
        document.getElementById('successMessage').innerText = 'Thank you for your feedback!';
        // Submit the form
        this.submit();
    }
});

function isNotEmpty(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.value.trim() === '') {
        showError(fieldId, 'This field cannot be empty.');
        return false;
    }
    return true;
}

function isValidEmail(fieldId) {
    const field = document.getElementById(fieldId);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(field.value.trim())) {
        showError(fieldId, 'Please enter a valid email address.');
        return false;
    }
    return true;
}

function hasCheckedOption(groupName) {
    const options = document.getElementsByName(groupName);
    for (let option of options) {
        if (option.checked) {
            return true;
        }
    }
    showError('sourceError', 'Please select one option.');
    return false;
}

function isValidDate(fieldId) {
    const field = document.getElementById(fieldId);
    const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if (!regex.test(field.value.trim())) {
        showError(fieldId, 'Please enter a valid date in DD-MM-YYYY format.');
        return false;
    }
    return true;
}

function showError(fieldId, message) {
    const errorSpan = document.getElementById(fieldId + 'Error');
    errorSpan.innerText = message;
}

function clearErrors() {
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => span.innerText = '');
}
