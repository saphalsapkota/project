document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Perform login validation and AJAX request here
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
  
    // Example login validation
    if (username === "admin" && password === "123456") {
      // Successful login, redirect or perform necessary actions
      console.log("Login successful");
    } else {
      // Display error message
      var errorDiv = document.getElementById("loginError");
      errorDiv.textContent = "Invalid username or password.";
    }
  });