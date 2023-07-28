let firstNumber;
let operator = null;
let secondNumber;
let displayValue = '';
let displayOperation = document.querySelector('.display')
const numButtons = document.querySelectorAll('.num')
numButtons.forEach((n) => {
    n.addEventListener('click', showOperation)
})
const operatorsButtons = document.querySelectorAll('.operator')
operatorsButtons.forEach(oBtn => {
  oBtn.addEventListener('click', storeFirstNumAndOperator)
})
document.querySelector('.equalBtn').addEventListener('click', calculate)
document.querySelector('.clear-btn').addEventListener('click', clear)
document.querySelector('.backtrack').addEventListener('click', backtrack)

function showOperation(e) {
    let key = e.target.getAttribute('data-num')
    displayValue += key
    displayOperation.innerText = displayValue
}

function storeFirstNumAndOperator(e) {
  if (operator !== null) {
    secondNumber = Number(displayValue)
    let result = operate(operator, firstNumber, secondNumber)
    displayValue = result
    displayOperation.innerText = displayValue;
    firstNumber = displayValue
    displayValue = ''
    operator = e.target.getAttribute('data-operator')
    return
  }
  firstNumber = Number(displayValue);
  operator = e.target.getAttribute('data-operator')
  displayValue = ''
}

function calculate() {
  
  if (firstNumber === undefined || operator === null) {
    displayOperation.innerText = 'Error!'
    clear()
    return
  }
  secondNumber = Number(displayValue)
  let result = operate(operator, firstNumber, secondNumber);
  if (isDecimal(result)) {
    result = result.toFixed(2)
  }
  displayValue = result
  displayOperation.innerText = displayValue;
  firstNumber = displayValue
  // displayValue = ''
  operator = null
}

function backtrack() {
  lengthOfDisplayValue = displayValue.toString().length;
  if (lengthOfDisplayValue <= 1) {
    displayValue = 0
    displayOperation.innerText = displayValue
    return 
  }
  displayValue = displayValue.toString().substr(0, lengthOfDisplayValue - 1)
  displayOperation.innerText = displayValue
}
// si despues de calcular con =
// apreto un operando, el displayV debe guardarse como primer num
// apreto un num, el displayV debe borrarse y el numero debe ser asignado al displayV

function clear(){
  firstNumber = 0;
  secondNumber = 0;
  operator = null;
  displayValue = ''
  displayOperation.innerText = 0
}


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
  if (n2 == 0) return 'Error'
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
function isDecimal(num) {
  return (num % 1)
}
// function showNumber(e){
//     let displayNum = document.querySelector('.num')
//     let num = e.target.getAttribute('data-key')
//     displayNum.innerText += num
//     displayValue = num
//     console.log(displayValue);
// }

