var email = document.getElementById("user_email");
var user_name = document.getElementById("user_name");
var message = document.getElementById("message");
var subject = document.getElementById("subject");

function checkEmail() {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    } else {
        return true;
    }
}

function contactMe() {
    var template_params = {
        "user_email": email.value,
        "subject": subject.value,
        "user_name": user_name.value,
        "message": message.value
    }
    
    var send = emailjs.send("default_service", "template_CogtKdJO", template_params);
    
    if (checkEmail() == true) {
        return send;
    }
}