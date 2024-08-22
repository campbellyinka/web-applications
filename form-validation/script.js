var nameError = document.querySelector('#name-error');
var phoneError = document.querySelector('#phone-error');
var emailError = document.querySelector('#email-error');
var messageError = document.querySelector('#message-error');
var submitError = document.querySelector('#submit-error');


function validateName(){
    var name = document.querySelector('#contact-name').value;

    if(name.length == 0){

        nameError.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(){
    var phone = document.querySelector('#contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits please";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
 
}


function validateEmail(){

    var email = document.querySelector('#contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML = "Email invalid";
        return false;

    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validateMessage(){

    var message = document.querySelector('#contact-message').value;
    var required = 10;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;  

    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}



function validateForm(){

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){

        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        
        return false;
    }
}