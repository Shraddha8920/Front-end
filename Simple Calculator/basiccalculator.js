let name=prompt("Please Enter Your Name : ");
function calculate() {
  var x = document.getElementById("num1");
  var y = document.getElementById("num2");
  var operator = document.getElementById("operator");
  var result = document.getElementById("ans");
  x = Number(x.value);
  y = Number(y.value);
  operator = operator.value;
  if (x == "" || y == "") {
    alert("Please Make sure you have entered both values");
  } else {
    switch (operator) {
      case "+":
        result.value = x + y;
        break;
      case "-":
        result.value = x - y;
        break;
      case "*":
        result.value = x * y;
        break;
      case "/":
        result.value = x / y;
        break;
      default:
        result.innerHTML = "NULL";
    }
  }
}

function changetext() {
  var str = document.getElementById("text");
  let date = new Date();
  let time = date.getHours();
  console.log(time);
  // 0-10 - Morning 11-16 - Afternoon 17-20 - Evening else - Night
  if (time >= 0 && time <= 10) {
    str.innerText = `Good Morning ${name} ! Have a great Day.`;
  }
  else if(time>=11 && time<=16){
    str.innerText=`Good Afternoon ${name} ! Have a great Day.`
  }
  else if(time>=17 && time<=20){
    str.innerText=`Good Evening ${name} ! Have a nice Evening.`
  }
  else{
    str.innerText=`Good Night ${name} ! Sweet Dreams.`
  }
  str.style.color = "red";
}
