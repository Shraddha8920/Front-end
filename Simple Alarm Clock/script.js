const alarm = document.getElementById("setalarm");
const alarmSubmit = document.getElementById("alarmbutton");
let message = document.getElementById("message");

let validalarm = false;

alarm.addEventListener("blur", () => {
  let regex =
    /^([0-9]){4}\-([0-9]){2}\-([0-9]){2} ([0-9]){2}\:([0-9]){2}\:([0-9]){2}$/;
  let str = alarm.value;
  if (regex.test(str)) {
    alarm.classList.remove("is-invalid");
    validalarm = true;
  } else {
    alarm.classList.add("is-invalid");
    validalarm = false;
  }
});
var audio = new Audio(
  "https://freesound.org/data/previews/316/316847_4939433-lq.mp3"
);

// function to play the alarm ring tone
function ringBell() {
  audio.play();
}
// Add an event listener to the submit button
alarmSubmit.addEventListener("click", setAlarm);
// This function will run whenever alarm is set from the UI
function setAlarm(e) {
  e.preventDefault();
  let type, boldText, displayMessage;
  if (validalarm) {
    alarmDate = new Date(alarm.value);
    now = new Date();

    let timeToAlarm = alarmDate - now;

    if (timeToAlarm >= 0) {
      setTimeout(() => {

        ringBell();
      }, timeToAlarm);
    }

    // alert msg at top
    type = "success";
    boldText = "Success";
    displayMessage = "Your alarm request has been successfully submitted.";
  } else {
    // alert msg at top
    type = "danger";
    boldText = "Error";
    displayMessage = "Your alarm request has not been sent due to some Error.";
  }
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${boldText}:</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 5000);
}
