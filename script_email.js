  const emailField = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  emailField.addEventListener("input", function () {
    const emailValue = emailField.value.trim();

    if (emailValue === "") {
      emailError.textContent = "";
      emailField.style.borderColor = "";
    } 
    else if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address (name@example.com).";
      emailField.style.borderColor = "red";
    } 
    else {
      emailError.textContent = "";
      emailField.style.borderColor = "green";
    }
  });
