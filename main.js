const grid = document.querySelector('.grid');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setGridSize(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 1; i <= size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', hover)
        gridSquare.addEventListener('mousedown', hover)
        grid.appendChild(gridSquare);
    }
}

function hover(e) {
    if (e.type === 'mouseover' && mouseDown) {
    e.target.style.backgroundColor = "black";
    console.log(e.type);
    console.log(e.target)
    } else {
        return;
    }
}

setGridSize(16);

document.querySelector('button').addEventListener('click', changeGridSize);


function changeGridSize () {
    grid.innerHTML = "";

    const gridInput = document.querySelector('input').value;

    if (gridInput > 100 || gridInput < 1) {
        alert('Enter number between 1 and 100.');
    } else {
        setGridSize(gridInput);
    }
}