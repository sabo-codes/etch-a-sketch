const square = document.createElement('div');
const container = document.querySelector('.container');
let numOfSides = 0;

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('newSquare');
        container.appendChild(newDiv);
    }
    let newDiv = document.createElement('div');
    newDiv.classList.add('newSquare');
    container.appendChild(newDiv);
}

const newSquares = document.querySelectorAll('.newSquare');

newSquares.forEach(e => e.addEventListener('mouseover', () => e.classList.add('hover')));

newSquares.forEach(e => e.addEventListener('click', () => e.classList.remove('hover')));


const promptBtn = document.querySelector('.prompt-btn')
promptBtn.addEventListener('click', userDecides);

function userDecides () {
    numOfSides = Number(prompt("Enter number of sides: "));
    console.log(numOfSides)
}