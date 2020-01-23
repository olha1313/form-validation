const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_check = document.getElementById('password_check');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = password_check.value.trim();

    if (userNameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else if (userNameValue.length < 3) {
        // add error class
        setErrorFor(username, 'Username must be at least 3 characters');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Email must be at least 6 characters')
    } else {
        setSuccessFor(password);
    }

    if (passwordCheckValue === '') {
        setErrorFor(password_check, 'Password cannot be blank');
    } else if (passwordCheckValue !== passwordValue) {
        setErrorFor(password_check, 'Passwords does not match')
    } else {
        setSuccessFor(password_check);
    }

    if (userNameValue.length >= 3 && isEmail(emailValue) && passwordValue.length >= 6 && passwordCheckValue === passwordValue) {
        swal({
            title: "Good job!",
            text: "Account created!",
            icon: "success",
        });
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerHTML = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

