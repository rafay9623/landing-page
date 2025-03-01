// scripts.js
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signInUsername').value.trim();
    const password = document.getElementById('signInPassword').value.trim();

    if (username === '' || password === '') {
        alert('Username and password cannot be empty.');
        return;
    }

    alert('Sign In successful!');
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signUpUsername').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();
    const confirmPassword = document.getElementById('signUpConfirmPassword').value.trim();
    const age = document.getElementById('signUpAge').value.trim();
    const phone = document.getElementById('signUpPhone').value.trim();
    const address = document.getElementById('signUpAddress').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (username === '') {
        alert('Username cannot be empty.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must contain special and numeric characters.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (isNaN(age) || age < 1 || age > 120) {
        alert('Please enter a valid age.');
        return;
    }

    if (phone === '') {
        alert('Phone number cannot be empty.');
        return;
    }

    if (address === '') {
        alert('Address cannot be empty.');
        return;
    }

    alert('Sign Up successful!');
});
