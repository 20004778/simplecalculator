# simplecalculator
# CStream
Name - Surya
Reg.No - 212220230052
# HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <div class="calculator">
        <div class="calculator-screen">
            <input type="text" id="res" readonly>
        </div>
        <div class="calculator-buttons">
            <div class="button-row">
                <button onclick="Clear()">C</button>
                <button onclick="Solve('%')">%</button>
                <button onclick="Back()">&#8592;</button>
                <button onclick="Solve('/')">&#247;</button>
            </div>
            <div class="button-row">
                <button onclick="Solve('7')">7</button>
                <button onclick="Solve('8')">8</button>
                <button onclick="Solve('9')">9</button>
                <button onclick="Solve('*')">*</button>
            </div>
            <div class="button-row">
                <button onclick="Solve('4')">4</button>
                <button onclick="Solve('5')">5</button>
                <button onclick="Solve('6')">6</button>
                <button onclick="Solve('-')">-</button>
            </div>
            <div class="button-row">
                <button onclick="Solve('1')">1</button>
                <button onclick="Solve('2')">2</button>
                <button onclick="Solve('3')">3</button>
                <button onclick="Solve('+')">+</button>
            </div>
            <div class="button-row">
                <button onclick="Solve('0')">0</button>
                <button onclick="Solve('.')">.</button>
                <button onclick="Solve('**')">^</button>
                <button class="equals" onclick="Result()">=</button>
            </div>
        </div>
    </div>
    <div class="history">
        <h2>Calculation History:</h2>
        <textarea id="history" readonly></textarea>
    </div>
    <script src="calculator.js"></script>
</body>
</html>

# CSS
.calculator {
    padding: 10px;
    border-radius: 1em;
    height: 380px;
    width: 400px;
    margin: auto;
    background-color: #191b28;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.display-box {
    font-family: 'Orbitron', sans-serif;
    background-color: #dcdbe1;
    border: solid black 0.5px;
    color: black;
    border-radius: 5px;
    width: 100%;
    height: 65%;
}

#btn {
    background-color: #fb0066;
}

input[type=button] {
    font-family: 'Orbitron', sans-serif;
    background-color: #64278f;
    color: white;
    border: solid rgb(7, 7, 7) 0.5px;
    width: 100%;
    border-radius: 5px;
    height: 70%;
    outline: none;
}

input:active[type=button] {
    background: #e5e5e5;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
}

# JavaScript:
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

