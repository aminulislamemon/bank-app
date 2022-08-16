document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value

    if (emailValue === 'aminulislamemon0005@gmail.com' && passwordValue === '$IamBorolox$') {
        window.location.href = "Dashboard.html"
    }
    else{
        alert('maybe you have some mistakes! Please check the Email & Password Field, And Try Again!')
    }
})