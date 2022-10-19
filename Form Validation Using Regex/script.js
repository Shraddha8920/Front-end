let Uname = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let submit = document.getElementById("submit");
let message = document.getElementById("message");

let validname = false;
let validemail = false;
let validphone = false;

Uname.addEventListener("blur", () => {
  let regex = /^([a-zA-z]){3,10}$/;
  let str = Uname.value;
  if (regex.test(str)) {
    Uname.classList.remove("is-invalid");
    validname = true;
  } else {
    Uname.classList.add("is-invalid");
    validname = false;
  }
});

email.addEventListener("blur", () => {
  let regex = /^([0-9a-zA-Z]+)@([(a-zA-Z)]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    validemail = true;
  } else {
    email.classList.add("is-invalid");
    validemail = false;
  }
});

phone.addEventListener("blur", () => {
  let regex = /^([0-9]){10}$/;
  let str = phone.value;

  if (regex.test(str)) {
    phone.classList.remove("is-invalid");
    validphone = true;
  } else {
    phone.classList.add("is-invalid");
    validphone = false;
  }
});

submit.addEventListener("click", () => {
  let type, boldText, displayMessage;
  if (validname && validemail && validphone) {
    type = "success";
    boldText = "Success";
    displayMessage = "Your travel request has been successfully submitted.";
  } else {
    type = "danger";
    boldText = "Error";
    displayMessage = "Your travel request has not been sent due to some Error.";
  }
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${boldText}:</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 5000);
});
