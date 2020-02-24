/*$("#username_sub").change(function() {
    console.log($(this).val());
    $("<span class='text-danger'> !!! </span>").insertAfter($(this));
});*/

function clearSubFields() {
    $("#username_sub").removeClass("is-valid is-invalid");
    $("#password_sub").removeClass("is-valid is-invalid");
    $("#password_conf").removeClass("is-valid is-invalid");
}

function isValid(item) {
    $(item).addClass("is-valid");
}

function isInvalid(item) {
    $(item).addClass("is-invalid");
}

$("#submit_sub").click(function(e) {
    e.preventDefault();
    clearSubFields();

    console.log("username : " + $("#username_sub").val());
    console.log("password : " + $("password_sub").val());

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
});