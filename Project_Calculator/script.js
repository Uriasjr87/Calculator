var number1 = "";
var number2 = "";
var operator = undefined;


function getNumber(number) {

    
    if (operator === undefined) {
        number1 = number1 + number;
        showNumber(number1)
    } else {
        number2 = number2 + number;
        showNumber(number2)
    }
    console.log("number1", number1);
    console.log("operator", operator);
    console.log("number2", number2);
    
}

function getOperation(operation) {
    operator = operation;

}

function showNumber(number) {
    let screen = document.getElementById("screen");
    screen.innerHTML = "<p>" + number + "</p>";
}

