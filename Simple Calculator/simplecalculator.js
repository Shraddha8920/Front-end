function calculate() {
    var num1 = document.getElementById("num1")
    var num2 = document.getElementById("num2")
    var op = document.getElementById("operator")
    var result = document.getElementById("result")
    if (num1.value === "") {
        alert("Please Enter Number 1")
    }
    if (num2.value === "") {
        alert("Please Enter Number 2")
    }
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    op = op.value

    if (op === '+') {
        result.value = num1 + num2
    } else if (op === '-') {
        result.value = num1 - num2
    } else if (op === '*') {
        result.value = num1 * num2
    } else {
        result.value = num1 / num2
    }

}