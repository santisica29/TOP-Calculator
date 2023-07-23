let firstNumber;
let operator = null;
let secondNumber;
let displayValue = '';
let displayOperation = document.querySelector('.display')
const numButtons = document.querySelectorAll('.num')
numButtons.forEach((n) => {
    n.addEventListener('click', showOperation)
    // let isNumber = !isNaN(b.getAttribute('data-key'))
    // if (isNumber) {
    //     b.addEventListener('click', showNumber)
    // }
})
const operatorsButtons = document.querySelectorAll('.operator')
operatorsButtons.forEach(ob => {
  ob.addEventListener('click', calculate)
})
document.querySelector('.equalBtn').addEventListener('click', equal)

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
    let key = e.target.getAttribute('data-num')

    displayValue += key
    displayOperation.innerText = displayValue
}

function calculate(e) {
  firstNumber = Number(displayValue);
  operator = e.target.getAttribute('data-operator')
  displayValue = ''
  console.log(typeof firstNumber);
}

function equal() {
  secondNumber = Number(displayValue)
  let result = operate(operator, firstNumber, secondNumber);
  displayOperation.innerText = result;
  displayValue = ''
}
// function showNumber(e){
//     let displayNum = document.querySelector('.num')
//     let num = e.target.getAttribute('data-key')
//     displayNum.innerText += num
//     displayValue = num
//     console.log(displayValue);
// }

