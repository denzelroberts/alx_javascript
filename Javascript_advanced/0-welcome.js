//creating function
function welcome(firstName, lastName){
    //concatenating
    const fullName = firstName +' '+ lastName;

    //function to display fullname
    function displayFullName(){
        alert('Welcome ' + fullName + '!')
    }

    //calling function
    displayFullName();
}