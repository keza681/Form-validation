const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const subscribeBtn = document.getElementById('btn')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// const isValidPassword = password => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(password).toLowerCase());
// }

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        setError(username, 'Please enter your name');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Please enter your password');
    // } else if (!isValidPassword(passwordValue)) {
    //     setError(password, 'Provide a valid password address');
    } else {
        setSuccess(password);
        window.location.href = "login.html";
    }

};


subscribeBtn.addEventListener('click', (e) => {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    //Set Value And LocalStorage

    username = username.value;
    storedUsername = localStorage.setItem('username', username);

    password = password.value;
    localStorage.setItem('password', password);
    

});


function check() {

    // stored data from the register-form
    var storedUserName = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // entered data from the login-form
    var userName = document.getElementById('username');
    var userPassword = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if (userName.value !== storedUserName || userPassword.value !== storedPassword) {
        alert('ERROR');
    } else {
        alert('You are loged in.');
        // location.reload();
    }
}



// Password and password from the sign-up form
// const username = document.getElementById('username');
// const password = document.getElementById('password');


// storing input from register form
// function store() {
//     localStorage.setItem("username", username.value);
//     localStorage.getItem("password", password.value);
// }

// check if stored data from signup-form is equal to entered data in the login-form
// function check() {

//     stored data from the signup-form
//     var storedName = localStorage.getItem("username");
//     var storedPassword = localStorage.getItem("password");
// }
