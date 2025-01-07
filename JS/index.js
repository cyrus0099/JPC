//---------javascript for the Sign in------------------
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin' && password === 'password') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        window.location.href = 'dashboard.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
//---------javascript for the create account------------------
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newEmail = document.getElementById('newEmail').value;
    const mobileNumber = document.getElementById('Mobile Number').value;
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('Confirm_Password').value;
    const message = document.getElementById('message');
    if (!validateEmail(newEmail)) {
        showMessage('Please enter a valid email address.', 'red');
        return;
    }
    if (!validateMobileNumber(mobileNumber)) {
        showMessage('Please enter a valid mobile number.', 'red');
        return;
    }
    if (newPassword !== confirmPassword) {
        showMessage('Passwords do not match.', 'red');
        return;
    }
    showMessage('Account created successfully!', 'green');
});

function showMessage(text, color) {
    const message = document.getElementById('message');
    message.style.color = color;
    message.textContent = text;
}

function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function validateMobileNumber(mobileNumber) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber);
}
//---------javascript for the Forgot_password account------------------
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    message.style.color = 'green';
    message.textContent = 'Password reset instructions have been sent to ' + email;
});
//---------javascript for the Toast_Message------------------
document.addEventListener('DOMContentLoaded', function () {
    var toastEl = document.querySelector('.toast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
});
//---------javascript for the Time------------------
function updateTime() {
    const now = new Date();
    const dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('date-time').innerText = dateTime;
}
setInterval(updateTime, 1000);
updateTime();