
let numberOne = +prompt ("Введите первое число");
let operandFunction = prompt ("Введите sum, min, mul, div, mod, deg");
let numberTwo = +prompt ("Введите второе число");
if (numberOne === 0 || numberTwo ===0 ) {
    alert ( 'Error' );
} else {
    function calc(operandFunction, numberOne, numberTwo) {
        if (operandFunction === 'sum') {
            let resultCalc = numberOne + numberTwo;
            alert ( resultCalc );
        }
        else if (operandFunction === 'min') {
            let resultCalc = numberOne - numberTwo;
            alert ( resultCalc );
        }
        else if (operandFunction === 'mul') {
            let resultCalc = numberOne * numberTwo;
            alert ( resultCalc );
        }
        else if (operandFunction === 'div') {
            let resultCalc = numberOne / numberTwo;
            alert ( resultCalc );
        }
        else if (operandFunction === 'mod') {
            let resultCalc = numberOne % numberTwo;
            alert ( resultCalc );
        }
        else if (operandFunction === 'deg') {
            let resultCalc = numberOne ** numberTwo;
            alert ( resultCalc );
        }
        else  {
            alert ( 'unknown operation' );
        }  
    };
    calc(operandFunction, numberOne, numberTwo);
};