//creating function
function validateEmail(emailInput){
    emailInput = document.getElementById("email");
    emailInput = emailInput.value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const errorMessage = document.getElementById("error");
    if (emailPattern.test(emailInput)){
    //Password is correct
    errorMessage.textContent = "";
    return true;
    }
    else{
    //Password is incorrect
    errorMessage.textContent = "Please enter a valid email address."
    return false;
    }
}