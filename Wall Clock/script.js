function currentTime() {
  let current = new Date();
  console.log(current);

  let hour = current.getHours();
  let minute = current.getMinutes();
  let second = current.getSeconds();
  let timeOfDay = hour < 12 ? "AM" : "PM";

  hour = (hour < 10 ? '0':'')+hour;
  minute = (minute < 10 ? '0':'')+minute;
  second = (second < 10 ? '0':'')+second;

  hour = (hour>12) ? hour-12 : hour;
  hour = (hour==00) ? 12 : hour;

  let time=hour+":"+minute+":"+second+" "+timeOfDay;
  document.getElementById('time').innerHTML=time;
}
