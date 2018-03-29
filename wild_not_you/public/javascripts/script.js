/* ___ FONCTION VMAIL CONFORME ____*/
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    // var $result = $("#result");
    var email = $("#input-16a").val();
    // $result.text("");
    let mySpan = $('.mail');
    if (validateEmail(email)) {
        mySpan.css("color", "green");
    } else {
        mySpan.css("color", "#ffc107");
    }
}

$("#input-16a").blur(validate);
