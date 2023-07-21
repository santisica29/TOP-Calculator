let firstNumber;
let operator;
let secondNumber;
let displayValue;
const buttons = document.querySelectorAll('.btn')
buttons.forEach((b) => {
    b.addEventListener('click', showOperation)
    // let isNumber = !isNaN(b.getAttribute('data-key'))
    // if (isNumber) {
    //     b.addEventListener('click', showNumber)
    // }
})

function add(n1, n2) {
  return n1 + n2;
}
function substract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}

function operate(operator, n1, n2) {
  switch (operator) {
    case "+":
      return add(n1, n2);
    case "-":
      return substract(n1, n2);
    case "x":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
  }
}


function showOperation(e) {
    let displayOperation = document.querySelector('.operation')
    let key = e.target.getAttribute('data-key')
    displayOperation.innerText += key
}
// function showNumber(e){
//     let displayNum = document.querySelector('.num')
//     let num = e.target.getAttribute('data-key')
//     displayNum.innerText += num
//     displayValue = num
//     console.log(displayValue);
// }

