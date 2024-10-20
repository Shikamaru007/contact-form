// Styling the Query Type section when the boxes are clicked to check the radio input.
document.querySelectorAll(".queryOptionTile").forEach(block => {
    block.addEventListener("click", () => {
        document.querySelectorAll(".queryOptionTile").forEach(item => {item.classList.remove("selected")});
        block.classList.add("selected");
        block.querySelector("input[type=radio]").checked = true;       
    })
});
// Function to perfom when the submit button is clicked to submit the form.
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const querySection = document.querySelector(".queryType");
    const anyQueryType = document.querySelector("input[name=queryType]:checked");
    const consentSection = document.querySelector(".consent");
    const consentSelected = document.getElementById("consent").checked;
    const emailPattern = /^[a-zA-Z&_.0-9]+@[a-zA-Z0-9]+\.[a-z]{2,5}$/;
    const successMessage = document.getElementById("successMessage");

    let isValid = true;


    // Validating the inputs with classes of inputs ... i.e firstname, lastname and message input fields.
    document.querySelectorAll(".input").forEach(item => {

        if(item.value === ""){
            item.parentElement.classList.add("error");
            isValid = false;
        }else {
            item.parentElement.classList.remove("error");
        }
    });


    // Validating the email input for emppty inputs and invalid email format.
    if(emailInput.value === ""){
        emailInput.parentElement.classList.add("error");
        emailInput.parentElement.querySelector(".errorMsg.empty").textContent = "This field is required";
        isValid = false;
    }
    else if(!emailPattern.test(emailInput.value)){
        emailInput.parentElement.classList.add("error");
        emailInput.parentElement.querySelector(".errorMsg").textContent = "Please enter a valid email";
        isValid = false;
    }else {
        emailInput.parentElement.classList.remove("error");
    }


    // Validating if a query type is selected.
    if(!anyQueryType){
        querySection.classList.add("error");
        isValid = false;
    }else {
        querySection.classList.remove("error");        
    }


    if(!consentSelected){
        consentSection.classList.add("error");
        isValid = false;
    }else {
        consentSection.classList.remove("error");
    }
    

    // If all fields are valid, display the success message
    if (isValid) {
        successMessage.classList.remove("hidden"); 
        setTimeout(() => {
            successMessage.classList.add("hidden");
        }, 5000);
        document.querySelectorAll(".queryOptionTile").forEach(item => {item.classList.remove("selected")});
        form.reset();
    }

});
