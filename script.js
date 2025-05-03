//var declaration
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

//validate function for name field
function validateName(){
    var name = document.getElementById("contact-name").value;
    //check the input field whether it is empty or not
    if(name.length == 0){
        nameError.innerHTML = "Name is required!";
        return false;
    }
    //condition for the full name with a space
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Fill in the full name!";
        return false;
    }
    //No error
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
//validate phone number
function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    //check the input field whether it is empty or not
    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required!";
        return false;
    }
    //condition for the phone number
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone number should be 10 digits!";
        return false;
    }
    //phone number input format
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone number should be numeric!";
        return false;
    }
    //No error
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
//validate email address
function validateEmail(){
    var email = document.getElementById("contact-email").value;
    //check the input field whether it is empty or not
    if(email.length == 0){
        emailError.innerHTML = "Email is required!";
        return false;
    }
    //condition for the email address input format
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = "Email is invalid!";
        return false;
    }
    //No error
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
//validate message
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    //the message length required
    var required = 20;
    //remaining chars to meet the requirement length
    var left = required - message.length;

    //condition where the message is too short
    if(left >0){
        messageError.innerHTML = left + " more characters required!";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
//validate form
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix the errors to proceed!";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}