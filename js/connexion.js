function clearCoFields() {
    $("#username_co").removeClass("is-valid is-invalid");
    $("#password_co").removeClass("is-valid is-invalid");
}

$("#connexion_form").submit(function(e) {
    e.preventDefault();
    clearCoFields();

    var values = convertFormData($(this).serialize());

    console.log($(this).attr("method"));
    console.log(values);

    console.log("username : " + $("#username_co").val());
    console.log("password : " + $("#password_co").val());

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

    if(formIsOK("#username_co", "#password_co")) {
        console.log("values : " + values);
        $.ajax({
            method: "POST",
            url: "ajax/users.ajax.php?act=Connect",
            data: values,
            type: "POST",
            dataTyp1e: 'json'
        }).done(function(response) {
            if(response != "false") {
                location.reload();
            } else {
                alert("Identifiant incorrect !");
                isInvalid("#username_co");
                isInvalid("#password_co");
            }
        });
    }
});

$("#deconnexion").click(function(e) {
    $.ajax({
        type: "POST",
        url: "/ajax/users.ajax.php?act=Deconnect"
    }).done(function() {
        location.reload();
    });
});
