const grid = document.querySelector('.grid');

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

function paintGrid(e) {
    if (!mouseDown && e.type === 'mouseover') {
        return;
    } else {
        e.target.style.backgroundColor = "black";
        console.log(mouseDown)
        if (e.target.style.backgroundColor === "black") {
            const paintedSquares = document.querySelectorAll('.grid-square');
            
            paintedSquares.forEach(e => e.addEventListener('click', () => e.style.backgroundColor = 'white'))
        }
        if (colorButton.onclick === true) {
            changeColor();
        }
    }
}

setGridSize(16);

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


const colorButton = document.querySelector('.color-btn')

const r = Math.floor(Math.random() * 257);
const g = Math.floor(Math.random() * 257);
const b = Math.floor(Math.random() * 257);
const rgb = 'rgb('+ r + ',' + g + ',' + b +')';


colorButton.addEventListener('click', changeColor);

// colorButton.onclick = function() {
//     if (!mouseDown && e.type === 'mouseover') {
//         return;
//     } else {
//         e.target.style.backgroundColor = rgb;
//         console.log(e)
//         if (e.target.style.backgroundColor === 'black') {
//             const paintedSquares = document.querySelectorAll('.grid-square');
            
//             paintedSquares.forEach(e => e.addEventListener('click', () => e.style.backgroundColor = 'white'))
//         }
//     }
// }

function changeColor(e) {
        e.target.style.backgroundColor = rgb;
        console.log(e)
        if (e.target.style.backgroundColor === rgb) {
            const paintedSquares = document.querySelectorAll('.grid-square');
            
            paintedSquares.forEach(e => e.addEventListener('click', () => e.style.backgroundColor = 'white'))
        }
    }