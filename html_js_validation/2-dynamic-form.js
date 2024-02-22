function generateInputFields(numFields){
    numFields = document.getElementById("numFields");
    numFields = numFields.value;

    const inputContainer = document.getElementById("inputContainer");
    // Clear existing input fields
    inputContainer.innerHTML = "";

    //create number of fields
    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

function validateForm() {
    const inputFields = document.querySelectorAll("#inputContainer input");
    for (const field of inputFields) {
        if (field.value.trim() === "") {
            alert("Please fill in all fields.");
            return false; // Prevent form submission
        }
    }
    return true; // Allow form submission
}