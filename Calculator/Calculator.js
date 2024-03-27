let display = document.getElementById('display');
let calculatorOn = true;

function appendToDisplay(value){
    if (calculatorOn){
        if(display.textContent == '0'){
            display.textContent = value;
        }else{
            display.textContent += value;
        }
    }
}

function clearDisplay(){
    if (calculatorOn){
        display.textContent = '0';
    }
}

function calculate(){
    if (calculatorOn){
        try{
            display.textContent = eval(display.textContent);
        } catch (error){
            display.textContent = 'Error'
        }
    }
}

function toggleCalculator(state) {
    if (state === 'on') {
        calculatorOn = true;
        display.style.opacity = 1;
        display.style.color = '#000';
    } else if (state === 'off'){
        calculatorOn = false;       
        display.style.opacity = 1;
        display.style.color = 'transparent';
        clearDisplay();
    }
}

document.getElementById('toggleButton').addEventListener('click', toggleCalculator);

function clearDisplay() {
    if (calculatorOn) {
        let currentContent = display.textContent;
        if (currentContent.length > 1) {
            
            display.textContent = currentContent.slice(0, -1);
        } else {
        
            display.textContent = '0';
        }
    }
}

document.getElementById('ClearButton').addEventListener('click', clearDisplay);