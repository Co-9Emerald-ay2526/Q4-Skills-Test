function logIn(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    switch (username) {

        case "kingjames":

            if (password === "lebron") {
                alert("Login successful!");
                window.location.href = "notebooks.html";
            } 
            
            else {
                alert("Incorrect username or password.");
            }

            break;

        default:
            alert("Username not found.");
    }
}