let history = [];
let currentExpression = '';

function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}

function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1);
        if (isNaN(num2) || !isFinite(num2)) {
            throw new Error("Invalid input");
        }
        history.push(`${num1} = ${num2}`);
        if (history.length > 10) {
            history.shift();
        }
        document.getElementById('res').value = num2;
    } catch (error) {
        document.getElementById('res').value = 'Error';
    }
    updateHistoryDisplay(); // Call this after updating the history
}


function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}

function updateHistoryDisplay() {
    document.getElementById('history').value = history.join('\n');
}