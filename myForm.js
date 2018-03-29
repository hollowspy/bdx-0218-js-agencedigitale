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
 
// /* ___ FONCTION Num Tel CONFORME ____*/  <-- Ne Foncitonne pas
// function validateTel(tel) {
//     var re = /^((+)33|0|0033)1-9{4}$/g/;
//     return re.test(tel);
// }

// function validate(tel) {
//     // var $result = $("#result");
//     var numTel = $("#input-16b").val();
//     // $result.text("");
//     let mySpan = $('.tel');
//     if (validateTel(tel)) {
//         // $result.text(email + " is valid :)");
//         // $result.css("color", "green");
//         mySpan.css("color", "green");
//     } else {
//         mySpan.css("color", "red");
//     }
// }

// $("#input-16b").blur(validate);