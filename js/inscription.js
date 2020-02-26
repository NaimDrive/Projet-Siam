function clearSubFields() {
    $("#username_sub").removeClass("is-valid is-invalid");
    $("#password_sub").removeClass("is-valid is-invalid");
    $("#password_conf").removeClass("is-valid is-invalid");
}

$("#inscription_form").submit(function(e) {
    e.preventDefault();
    clearSubFields();

    var values = convertFormData($(this).serialize())

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

    if(formIsOK("#username_sub", "#password_sub", "#password_conf")) {
        console.log(values);
        $.ajax({
            method: "POST",
            url: "ajax/users.ajax.php?act=Inscription",
            data: values,
            type: "POST",
            dataTyp1e: 'json'
        }).always(function(response) {
            console.log(values);
        });
    }

});