const square = document.createElement('div');
const container = document.querySelector('.container');

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

function hover(element, enter, leave) {
    element.addEventListener('mouseenter', enter);
    element.addEventListener('mouseleave', leave);
}

hover(document.querySelector('.newSquare'), e => {
    e.target.classList.add('hover')
}), e => {
    e.target.classList.remove('hover')
}

