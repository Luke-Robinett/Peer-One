const newPost = $(".new-post");
const saveResponse = $(".save");
const logout = $(".logout-icon");
const skillDropdown = $("#skill-dropdown");

// Populate dropdown list with skills
skillDropdown.empty();
skillDropdown.append($("<option>Choose one...</option>"));
getSkills(function (skills) {
    skills.forEach(skill => {
        const newOption = $(`<option value="${skill.id}">${skill.subject}</option>`);
        skillDropdown.append(newOption);
    });
});

newPost.on("click", function (event) {
    // Get user info 
    getUserInfo(function (user) {
        // Populate the JSON object
        var addPost = {
            userId: user.id,
            skillId: $("#skill-dropdown:selected").text(),
            body: $(".new-body").val().trim()
        };

        console.log(addPost.body);

        $.ajax("/api/posts", {
            type: "POST",
            data: addPost
        }).then(function () {
            // Reload the page to get the updated list
            window.location.replace("/feed");
        });
    });

// saveResponse.on("click", function(event) {
//     var addResponse = {
//         userId: 1,
//         replyToId: 1,
//         body: $(".response-body").val().trim()
//     };

//     console.log (addResponse.body);

//     $.ajax("/api/posts", {
//         type: "POST",
//         data: addResponse
//       }).then(function() {
//         // Reload the page to get the updated list
//         window.location.replace("http://localhost:8080/feed");
//       });
// });

// logout.on("click", function (event) {
//     $.ajax("/api/logout", {
//         type: "GET"
//       });
// })
