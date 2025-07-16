document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simple validation (just for demonstration)
    if (username === "" || password === "") {
        document.getElementById("error-message").innerText = "Both fields are required!";
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
        // Normally, you would send the form data to a server here
        alert("Login successful!");
    }
});
