const grid = document.querySelector('.grid');
const clear = document.querySelector('.clear-btn');
const defaultColor = document.querySelector('.default-btn')
const colorButton = document.querySelector('.color-btn')

//set current color of painter
let currentColor = "black";

document.querySelector('.submit').addEventListener('click', changeGridSize);
defaultColor.addEventListener('click', setDefaultPaint);
clear.addEventListener('click', clearGrid);
colorButton.addEventListener('click', setRainbowPaint);

//initial/default grid size
setGridSize(16);

//set initial state of mousedown
let mouseDown = false;
document.body.onmousedown = function(){
    mouseDown = true;
};
document.body.onmouseup = function(){
    mouseDown = false;
};


function setGridSize(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 1; i <= size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', paintGrid);
        gridSquare.addEventListener('mousedown', paintGrid);
        grid.appendChild(gridSquare);
    }
}

function setRainbowPaint() {
    currentColor = "rgb";
}

function setDefaultPaint() {
    currentColor = "black";
}

//paints grid depending on current paint color
function paintGrid(e) {
    if (!mouseDown && e.type === 'mouseover') {
        return;
    }
    if (currentColor === "rgb") {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgb = 'rgb('+ r + ',' + g + ',' + b +')';

        e.target.style.backgroundColor = rgb;
    } else if (currentColor === "black") {
        e.target.style.backgroundColor = currentColor;
    } 
    if (e.target.style.backgroundColor === currentColor) {
        const paintedSquares = document.querySelectorAll('.grid-square');
            
        paintedSquares.forEach(e => e.addEventListener('click', () => e.style.backgroundColor = 'white'))
    }
}

function changeGridSize () {

    const gridInput = document.querySelector('input').value;

    if (gridInput > 100 || gridInput < 1) {
        alert('Enter number between 1 and 100.');
    } else {
        grid.innerHTML = "";
        setGridSize(gridInput);
    }
}

function clearGrid() {
    const paintedSquares = document.querySelectorAll('.grid-square');

    paintedSquares.forEach(e => e.style.backgroundColor = "white");
}

