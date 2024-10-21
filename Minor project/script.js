const resultField = document.getElementById('result');

function appendToResult(value) {
    resultField.value += value;
}

function clearResult() {
    resultField.value = '';
}

function calculate() {
    try {
        // Ensure proper decimal calculation
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function calculateSquare() {
    try {
        const number = parseFloat(resultField.value);
        resultField.value = number * number;
    } catch (error) {
        resultField.value = 'Error';
    }
}

function calculatePower() {
    const values = resultField.value.split("^");
    if (values.length === 2) {
        const base = parseFloat(values[0]);
        const exponent = parseFloat(values[1]);
        resultField.value = Math.pow(base, exponent);
    } else {
        resultField.value = 'Error';
    }
}
