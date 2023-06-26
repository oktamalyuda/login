let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

function onLogin() {
  console.log(usernameInput.value);
  console.log(passwordInput.value);

  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    alert("sedang login admin");
  } else {
    alert("maaf username atau password yang anda masukan salah");
  }
}
