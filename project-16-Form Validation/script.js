let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let emailError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");

let contactName = document.getElementById("name");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

contactName.addEventListener("keyup", validateName);

function validateName() {
    let nameValue = contactName.value.trim();
    
    if (nameValue.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!nameValue.match(/^[a-zA-Z ]{2,30}$/)) {
        nameError.innerHTML = 'Write Fullname';
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

phone.addEventListener("keyup", validatePhone);

function validatePhone() {
    let phoneValue = phone.value.trim();

    if (phoneValue.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (phoneValue.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if (!phoneValue.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

email.addEventListener("keyup", validateEmail);

function validateEmail() {
    let emailValue = email.value.trim();

    if (emailValue.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

message.addEventListener("keyup", validateMessage);

function validateMessage() {
    let messageValue = message.value.trim();
    let charCount = 40;
    let leftCharCount = charCount - messageValue.length;

    if (leftCharCount > 0) {
        messageError.innerHTML = leftCharCount + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event) {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        event.preventDefault();
    }
});
