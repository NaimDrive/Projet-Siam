function isValid(item) {
    $(item).removeClass("is-invalid");
    $(item).addClass("is-valid");
}

function isInvalid(item) {
    $(item).removeClass("is-valid")
    $(item).addClass("is-invalid");
}

function formIsOK(...args) {
    var ok = 1;
    args.forEach(function(elt) {
        if(!($(elt).hasClass("is-valid"))) {
            ok = 0;
            return;
        }
    });

    console.log("return : " + ok);

    return ok;

}

function convertFormData(plainData) {
    plainData = plainData.split('&');
    var fData = {};

    plainData.forEach(function(data, index) {
		tmp = data.split('=')[0];
		tmp_result = data.split('=')[1];
		fData[tmp] = tmp_result;
    });

    return fData;
}
