var number1 = "";
var number2 = "";
var operator = undefined;
var isReadyToCalculate = false;

function getNumber(number) {


    if (operator === undefined) {
        number1 = number1 + number;
        showNumber(number1)
    } else {
        number2 = number2 + number;
        showNumber(number2)
    }

    

}

function getOperation(operation) {
    operator = operation;

}

function showNumber(number) {
    let screen = document.getElementById("screen");
    screen.innerHTML = "<p>" + number + "</p>";
    if (isReadyToCalculate === true) {
        clear();
        isReadyToCalculate = false;
    }
}



function clear() {
    number1 = "";
    number2 = "";
    operator = undefined;
}

function clearAll() {
    number1 = "";
    number2 = "";
    operator = undefined;
    showNumber(0);
}

function equalsButton() {

    isReadyToCalculate = setReady();

    if (isReadyToCalculate) {
        let n1 = parseFloat(number1);
        let n2 = parseFloat(number2);

        switch (operator) {
            case '+':
                showNumber(n1 + n2);
                break;
            case '-':
                showNumber(n1 - n2);
                break;
            case 'x':
                showNumber(n1 * n2);
                break;
            case '/':
                showNumber(n1 / n2);
                break;
            case '%':
                showNumber((n1 * 100) / 100);
                break;

        }
    }
}

function setReady() {
    if (number1 !== undefined && operator !== undefined && number2 !== undefined) {
        return true;
    }
    return false;
}

function reverseSign() {
    if (operator === undefined) {
        number1 = (number1 * -1).toString(); 
        showNumber(number1);

    } else {
        number2 = number2 * (-1);
        showNumber(number2);
    }
    
}


/* 

 criar uma funcao que verifica se o n1 existe e o operator existe tbm e o n2 é indefinido, se for verdaeiro o n2 recebe o valor de n1, senao nada acontece  
 
 */
 