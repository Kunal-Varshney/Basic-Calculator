
const display = document.getElementById("display");
const clearbtn = document.querySelector(".clear-btn");

// Append a value (number or operator) to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display (reset to "0")
function clearDisplay() {
  display.value = "";
}


// Add a decimal point only if the current number chunk doesn’t already have one
function addDot(dot) {
  let currentValue = display.value;

  // Get the last number after the most recent operator
  let lastNumber = currentValue.split(/[\+\-\*\/]/).pop();

  // Only add dot if this number chunk doesn't have one yet
  if (!lastNumber.includes(dot)) {
    // If empty or last char is an operator, start with "0."
    if (currentValue === "" || /[\+\-\*\/]$/.test(currentValue)) {
      display.value += "0" + dot;
    } else {
      display.value += dot;
    }
  }
}

// Calculate and display the result
function calculateResult() {
  if (display.value === "" || display.value === "error") {
    display.value = "";
  } else {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "error";
    }
  }
}

// Calculate square root of the displayed number
function squareRoot() {
  let num = display.value;
  if (num === "error" || num === "") {
    display.value = "";
  } else if (/[\+\-\*\/]$/.test(num) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = Math.sqrt(num);
  }
}

// Convert number to percentage
function percentage() {
  let num = display.value;
  if (num === "error" || num === "") {
    display.value = "";
  } else if (/[\+\-\*\/]$/.test(num) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = num / 100;
  }
}

// Handle backspace to remove the last character
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Change the sign of the current number (positive to negative or vice versa)
function changeSign() {
  let num = display.value;
  if (num === "" || isNaN(num)) {
    display.value = "";
  } else {
    display.value = -num;
  }
}

// Calculate the square of the displayed number
function square() {
  let num = display.value;
  if (num === "error" || num === "") {
    display.value = "";
  } else if (/[\+\-\*\/]$/.test(num) || isNaN(num)) {
    display.value = "error";
  } else {
    display.value = Math.pow(num, 2);
  }
}

document.addEventListener("keydown",function(event) {
    const key  =  event.key;
    if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
        appendToDisplay(key);
    }

    if (key === "Enter"  || event.code === "NumpadEnter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        backspace();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});


// let display = document.getElementById("display");

//     function appendToDisplay(value) {
//       display.value += value;
//     }

//     function addDot(dot) {
//       let exp = display.value.split(/[\+\-\*\/]/);
//       let lastNum = exp[exp.length - 1];
//       if (!lastNum.includes(".")) {
//         display.value += dot;
//       }
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function backspace() {
//       display.value = display.value.slice(0, -1);
//     }

//     function calculateResult() {
//       try {
//         display.value = eval(display.value);
//       } catch (error) {
//         display.value = "Error";
//       }
//     }

//     function square() {
//       if (display.value) {
//         display.value = Math.pow(Number(display.value), 2);
//       }
//     }

//     function squareRoot() {
//       if (display.value) {
//         display.value = Math.sqrt(Number(display.value));
//       }
//     }

//     function percentage() {
//       if (display.value) {
//         display.value = Number(display.value) / 100;
//       }
//     }

//     function changeSign() {
//       if (display.value) {
//         display.value = Number(display.value) * -1;
//       }
//     }