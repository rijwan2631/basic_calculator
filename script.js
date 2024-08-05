// Get the calculator elements
const calcScreen = document.querySelector('.calc-screen');
const calcOperation = document.querySelector('.calc-operation');
const calcTyped = document.querySelector('.calc-typed');
const calcKeys = document.querySelectorAll('.key');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let operator = '';
let result = '';

// Add event listeners to the keys
calcKeys.forEach((key) => {
  key.addEventListener('click', (e) => {
    const keyValue = e.target.textContent;

    // Handle numbers
    if (!isNaN(keyValue)) {
      currentNumber += keyValue;
      calcTyped.textContent = currentNumber;
    }

    // Handle operators
    if (['+', '-', '*', '/'].includes(keyValue)) {
      operator = keyValue;
      previousNumber = currentNumber;
      currentNumber = '';
      calcOperation.textContent = `${previousNumber} ${operator}`;
    }

    // Handle equals
    if (keyValue === '=') {
      result = eval(`${previousNumber} ${operator} ${currentNumber}`);
      calcTyped.textContent = result;
      currentNumber = result;
      previousNumber = '';
      operator = '';
    }

    // Handle clear
    if (keyValue === 'C') {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      result = '';
      calcTyped.textContent = '';
      calcOperation.textContent = '';
    }
  });
});