const square = document.createElement('div');
const grid = document.querySelector('.grid');
let numOfSides = 0;

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('newSquare');
        grid.appendChild(newDiv);
    }
}

const newSquares = document.querySelectorAll('.newSquare');
console.log(newSquares)

// newSquares.forEach(e => e.addEventListener('mouseover', () => e.classList.add('hover')));

// newSquares.forEach(e => e.addEventListener('click', () => e.classList.remove('hover')));

// let mouseDown = false
// document.body.onmousedown = () => (mouseDown = true)
// document.body.onmouseup = () => (mouseDown = false)

// newSquares.forEach(e => e.addEventListener('mouseover', () => e.classList.add('hover')));
newSquares.forEach(e => e.addEventListener('mousedown', () => e.classList.add('hover')));
// newSquares.forEach(e => e.addEventListener('mouseover', () => e.classList.add('hover')));



const promptBtn = document.querySelector('.prompt-btn')
promptBtn.addEventListener('click', userDecides);

function userDecides () {
    do {
    numOfSides = Number(prompt("Enter number of sides: "));
    console.log(numOfSides)
    }
    while (numOfSides > 100)

    grid.innerHTML = "";

    for (let i = 1; i <= numOfSides; i++) {
        for (let j = 1; j <= numOfSides; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('newSquare');
            grid.appendChild(newDiv);
        }
    }
}
