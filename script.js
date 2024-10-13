// Initialize display content
let cDisplay = '';
const display = document.querySelector('#display');

// Update the display value
function updateDisplay(value) {
  cDisplay += value;
  display.value = cDisplay;
}

// Clear the display
function clearDisplay() {
  cDisplay = '';
  display.value = '';
}

// Evaluate the result
function evaluateDisplay() {
  try {
    cDisplay = eval(cDisplay) || '';
    display.value = cDisplay;
  } catch (e) {
    display.value = 'Error';
    cDisplay = '';
  }
}

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      evaluateDisplay();
    } else if (value === 'AC') {
      clearDisplay();
    } else {
      updateDisplay(value);
    }
  });
});

// Handle keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Allow digits, operators, and special keys
  if (!isNaN(key)) {
    updateDisplay(key);
  } else if (['+', '-', '*', '/', '%', '.'].includes(key)) {
    updateDisplay(key);
  } else if (key === 'Enter' || key === '=') {
    evaluateDisplay();
  } else if (key === 'Backspace') {
    cDisplay = cDisplay.slice(0, -1);
    display.value = cDisplay;
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '(' || key === ')') {
    updateDisplay(key);
  }
});
