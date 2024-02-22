function handleFormSubmit(event) {
    //event.preventDefault(); // Prevent default form submission behavior
  
    // Retrieve form field values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
  
    // Validate required fields
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      // Display error message
      alert('Please fill in all required fields.');
      return false; // Do not submit the form
    }
  
    // If all validations pass, display success message
    alert('Form submitted successfully!');
    return true; // Allow form submission
}