document.getElementById("login-submit").addEventListener("click", function () {
  //user email
  const EmailField = document.getElementById("user-email");
  const userEmail = EmailField.value;
  //user password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  //condition
  if (userEmail == "nafis@gmail.com" && userPassword == "secret") {
    location.href = "banking.html";
  }
});
