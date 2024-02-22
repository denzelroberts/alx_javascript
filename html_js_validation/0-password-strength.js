//creating function
function validatePassword(passwordInput){
    passwordInput = document.getElementById("password");
    passwordInput = passwordInput.value;
    const isLong = passwordInput.length >= 8;
    const hasUppercase = /[A-Z]/.test(passwordInput);
    const hasLowercase = /[a-z]/.test(passwordInput);
    const hasDigit = /\d/.test(passwordInput);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(passwordInput);

    const errorMessage = document.getElementById("error");
    if (isLong && hasUppercase && hasLowercase && hasDigit && hasSpecialChar){
    //Password is correct
    errorMessage.textContent = "";
    return true;
    }
    else{
    //Password is incorrect
    errorMessage.textContent = "Password is incorrect!"
    return false;
    }
}