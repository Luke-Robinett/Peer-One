$(document).ready(function () {
    $("#lets-go").on("click", function (event) {
        logIn({
            email: $("#login-email").val().trim(),
            password: $("#login-password").val().trim()
        }, function (err, response) {
            if (err) {
                return(err);
            }
            return null, response;
        });
    });
});

