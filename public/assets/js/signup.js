$(document).ready(function () {
    // Variables for form items
    const usernameSpan = $("#username-span");
    const emailField = $("#email-field");
    const passwordField = $("#password-field");
    const signupBtn = $("#signup-btn");

    // Get a random username
    getRandomUsername(function (randomUsername) {
        $(usernameSpan).text(randomUsername);
    });

    // Event handler for button to get another random name
    $("#username-btn").on("click", function (event) {
        event.preventDefault();

        getRandomUsername(function (randomUsername) {
            $(usernameSpan).text(randomUsername);
        });
    });

    // Event handler for signup button click
    $(signupBtn).on("click", function (event) {
        event.preventDefault();

        // Save and validate form entries
        const username = $(usernameSpan).text();
        const email = $(emailField).val().trim();
        const password = $(passwordField).val().trim();

        if (email.length > 0) {
            if (password.length > 0) {
                // Create object for AJAX POST request
                const newUser = {
                    username: username,
                    email: email,
                    password: password
                };

                // Make the AJAX POST request
                $.ajax("localhost:8080/api/users", {
                    method: "POST",
                    data: newUser
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function () {
                        alert("Server error. Couldn't create user.");
                    });
            } else {
                alert("Please enter a valid password.");
            }
        } else {
            alert("Please enter a valid email address.");
        }
    });
});

function getRandomUsername(callback) {
    $.get("localhost:8080/api/namegen")
        .then(function (response) {
            callback(response);
        });
}