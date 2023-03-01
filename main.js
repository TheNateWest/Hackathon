let input = '';

const userInput = document.getElementById('userInput');
const button = document.getElementById('button')
const reset = document.getElementById('reset')
const textOutput = document.getElementById('textOutput')
console.log(button)

userInput.addEventListener('keyup', (event) => {
    input = event.target.value
    console.log(input)
})

button.addEventListener('click', () => {
    textOutput.innerText = numOfRampsBelow(userInput.value)
})

reset.addEventListener('click', () => {
    userInput.value = '';
    textOutput.innerText = '';
    input = '';
})


function rampNumer(num) {
    let currentNum = num.toString().split("").map(Number);

    for (let i = 0; i < currentNum.length; i++) {
        if (currentNum[i] < currentNum[i-1]) {
            return false;
        }
    } return true;
    }

function numOfRampsBelow(num) {
    if (num < 0 || num > 99999) {
        return "Invalid Number";
    }








    let counter = 0;

    for (let i = 0; i < num ; i++) {
     if (rampNumber(i+1)) {
        counter++
     }
    }

    return `${counter} total ramp numers are less than ${num}.`

}