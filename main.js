const square = document.createElement('div');
const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
}