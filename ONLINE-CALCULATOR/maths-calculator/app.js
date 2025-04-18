const back_func = document.querySelector('#back-btn');

back_func.addEventListener('click' , ()=>{
    window.history.back()
})

const buttons = document.querySelectorAll('.child-input');
const displayScreen = document.querySelector('#content-display-screen');

let currentInput = '';
let firstOperand  = '';
let currentOperator = '';
let memory = 0;;

function updateDisplay(value){
    displayScreen.textContent = value;
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');

        // Special function buttons like CE
        if (button.classList.contains('function')) {
            let func = button.textContent.trim();
            switch (func) {
                case 'CE':
                    currentInput = '';
                    currentOperator = '';
                    firstOperand = '';
                    updateDisplay('00');
                    break;

                case 'CE':
                        currentInput = '';
                        currentOperator = '';
                        firstOperand = '';
                        updateDisplay('00');
                        break;
                
                case 'MC':
                        memory = 0;
                        updateDisplay('Memory Cleared');
                        break;
                
                case 'MR':
                        currentInput = memory.toString();
                        updateDisplay(currentInput);
                        break;
                
                case 'M+':
                        if (currentInput !== '') {
                            memory += parseFloat(currentInput);
                            updateDisplay('M+ : ' + memory);
                        }
                        break;
                
                case 'M-':
                        if (currentInput !== '') {
                            memory -= parseFloat(currentInput);
                            updateDisplay('M- : ' + memory);
                        }
                        break;
            }
            return; // exit early
        }

        // Operator and icon-based logic
        if (icon) {
            if (icon.classList.contains('fa-add')) {
                currentOperator = '+';
                firstOperand = currentInput;
                currentInput = '';
                updateDisplay(firstOperand + currentOperator);
                return;
            } else if (icon.classList.contains('fa-subtract')) {
                currentOperator = '-';
                firstOperand = currentInput;
                currentInput = '';
                updateDisplay(firstOperand + currentOperator);
                return;
            } else if (icon.classList.contains('fa-multiply')) {
                currentOperator = '*';
                firstOperand = currentInput;
                currentInput = '';
                updateDisplay(firstOperand + currentOperator);
                return;
            } else if (icon.classList.contains('fa-divide')) {
                currentOperator = '/';
                firstOperand = currentInput;
                currentInput = '';
                updateDisplay(firstOperand + currentOperator);
                return;
            } else if (icon.classList.contains('fa-square-root-variable')) {//it requires only one operand
                if (currentInput !== '') {
                    const num = parseFloat(currentInput);
                    if (num >= 0) {
                        const result = Math.sqrt(num);
                        updateDisplay('√' + currentInput + ' = ' + result);
                        currentInput = result.toString();
                        firstOperand = '';
                        currentOperator = '';
                    } else {
                        updateDisplay('Error');
                    }
                }
                return;
            
            
            } else if (icon.classList.contains('fa-percent')) {
             

                    currentOperator = '%';
                    firstOperand = currentInput;
                    currentInput = '';
                    updateDisplay(firstOperand + currentOperator);
                    return;
                
            }
            
            else if (icon.classList.contains('fa-equals')) {
                if (firstOperand !== '' && currentOperator !== '' && currentInput !== '') {
                    let result;
                    const num1 = parseFloat(firstOperand);
                    const num2 = parseFloat(currentInput);

                    switch (currentOperator) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case '*':
                            result = num1 * num2;
                            break;
                        case '/':
                            result = (num2 !== 0) ? num1 / num2 : 'Error';
                            break;

                        case '%':
                            result = (num2 !== 0) ? (num1/100) * num2 : 'Error';
                            break


                       
                    }

                    updateDisplay(result.toFixed(3));
                    currentInput = result.toFixed(3).toString();
                    firstOperand = '';
                    currentOperator = '';
                }
                return;
            }
        }

        // Number input (default case)
        const value = button.textContent.trim();

        if (value === '1/x') {
             if (currentInput !== '') {
                const num = parseFloat(currentInput);
                 if (num !== 0) {
                   const result = (1 / num).toFixed(3);
                   updateDisplay(result);
                   currentInput = result.toString();
                    firstOperand = '';
                    currentOperator = '';
        } else {
            updateDisplay('Error');
        }
    }
    return; // Prevents further code from executing
}

// Default behavior for number and dot/comma
currentInput += value;
if (currentOperator) {
    updateDisplay(firstOperand + currentOperator + currentInput);
} else {
    updateDisplay(currentInput);
}

    });
});
