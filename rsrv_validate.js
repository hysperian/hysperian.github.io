const form = document.getElementById('reservationForm');
const submitButton = document.getElementById('submitButton');

// Validate form on any input change
form.addEventListener('input', () => {
    if (form.checkValidity()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});