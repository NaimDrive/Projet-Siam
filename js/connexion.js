function clearCoFields() {
    clearFields("#username_co", "#password_co");
}

function clearPasswFields() {
    clearFields("#new_passw", "#new_pass_conf");
    // $("#password_form")[0].reset();
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
        // console.log(values);
        $.ajax({
            method: "POST",
            url: "ajax/users.ajax.php?act=Connect",
            data: values,
            type: "POST",
            dataTyp1e: 'json'
        }).done(function(response) {
            if(response != "false") {
                location.reload();
                // console.log(response);
            } else {
                areInvalid("#username_co", "#password_co");
                alert("Identifiant incorrect !");
            }
            // console.log(response);
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

$("#password_form").submit(function(e) {
    e.preventDefault();
    clearPasswFields();

    let values = convertFormData($(this).serialize());
    values["user"] = $("#current_user").text();

    console.log(values);

    if(values["new_passw"] === values["new_pass_conf"] && values["new_passw"] !== "") {
        areValid("#new_passw", "#new_pass_conf")
        // $("#passw_close").click();
        // clearPasswFields();

        $.ajax({
            method: "POST",
            url: "ajax/users.ajax.php?act=Password",
            data: values,
            type: "POST",
            dataTyp1e: 'json'
        }).done(function(response) {
            if(response != "false") {
                location.reload();
            } else {
                alert("Mot de passe incorrect !");
                isInvalid("#password_verif");
            }
        });
    } else {
        areInvalid("#new_passw", "#new_pass_conf");
    }
});
