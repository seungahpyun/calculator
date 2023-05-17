let displayValue = '';

function appendInput(value) {
  displayValue += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Oops!';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLastCharacter() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculatePercentage() {
  try {
    const result = eval(displayValue) / 100;
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function plusMinus() {
  try {
    const result = eval(displayValue) * -1;
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Oops!';
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

document.addEventListener('keydown', event => {
  if (event.key.match(/[0-9]/)) {
    const number = event.key;
    appendInput(number);
  } else if (event.key === '.') {
    appendInput('.');
  } else if (event.key.match(/[\+\-\*\/]/)) {
    const operator = event.key;
    appendInput(operator);
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Escape') {
    clearDisplay();
  } else if (event.key === 'Backspace') {
    deleteLastCharacter();
  }
});
