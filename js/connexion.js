function clearCoFields() {
    $("#username_co").removeClass("is-valid is-invalid");
    $("#password_co").removeClass("is-valid is-invalid");
}

$("#submit_co").click(function(e) {
    e.preventDefault();
    clearCoFields();

    console.log("username : " + $("#username_co").val());
    console.log("password : " + $("password_co").val());

    if($("#username_co").val() == "") {
        isInvalid("#username_co");
    } else {
        isValid("#username_co");
        if($("#password_co").val() == "") {
            isInvalid("#password_co");
        } else {
            isValid("#password_co");
            
        }
    }
});