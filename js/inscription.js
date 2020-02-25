function clearSubFields() {
    $("#username_sub").removeClass("is-valid is-invalid");
    $("#password_sub").removeClass("is-valid is-invalid");
    $("#password_conf").removeClass("is-valid is-invalid");
}

$("#submit_sub").click(function(e) {
    e.preventDefault();
    clearSubFields();

    // console.log("username : " + $("#username_sub").val());
    // console.log("password : " + $("password_sub").val());

    if($("#username_sub").val() == "") {
        isInvalid("#username_sub");
    } else {
        isValid("#username_sub");
        if($("#password_sub").val() == "") {
            isInvalid("#password_sub");
        } else {
            isValid("#password_sub");
            if($("#password_conf").val() != $("#password_sub").val()) {
                isInvalid("#password_conf");
            } else {
                isValid("#password_conf");
            }
        }
    }

    formIsOK("#username_sub", "#password_sub", "#password_conf");

});