

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// probably need to round the value
function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    }
}

let number1, 
    number2, 
    operator;
