const grid = document.querySelector('.grid');
let currentColor = "black";

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

const colorButton = document.querySelector('.color-btn')
colorButton.addEventListener('click', changeColor);

function changeColor() {
    currentColor = "rgb";
}
console.log(currentColor)

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
        console.log(currentColor)

        if (e.target.style.backgroundColor === currentColor) {
            console.log(currentColor)
            const paintedSquares = document.querySelectorAll('.grid-square');
            console.log(paintedSquares)
                
            paintedSquares.forEach(e => e.addEventListener('click', () => e.style.backgroundColor = 'white'))
        }
    } else if (currentColor === "black") {
        e.target.style.backgroundColor = currentColor;
        console.log(currentColor);
        if (e.target.style.backgroundColor === currentColor) {
            const paintedSquares = document.querySelectorAll('.grid-square');
                
            paintedSquares.forEach(e => e.addEventListener('click', () => e.style.backgroundColor = 'white'))
        }
    } 
}

setGridSize(16);

const defaultColor = document.querySelector('.default-btn')
defaultColor.addEventListener('click', paintGrid)

document.querySelector('.submit').addEventListener('click', changeGridSize);


function changeGridSize () {
    grid.innerHTML = "";

    const gridInput = document.querySelector('input').value;

    if (gridInput > 100 || gridInput < 1) {
        alert('Enter number between 1 and 100.');
    } else {
        setGridSize(gridInput);
    }
}

const clear = document.querySelector('.clear-btn');
clear.addEventListener('click', clearGrid);

function clearGrid() {
    const paintedSquares = document.querySelectorAll('.grid-square');

    paintedSquares.forEach(e => e.style.backgroundColor = "white");
}

