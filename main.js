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

function clearGrid() {
    const paintedSquares = document.querySelectorAll('.grid-square');

    paintedSquares.forEach(e => e.style.backgroundColor = "white");
}

const clear = document.querySelector('.clear-btn');
clear.addEventListener('click', clearGrid);

