const container = document.querySelector('.container');
const grid = document.querySelector('.grid')
let size = 16;

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square')
            square.style.width = `${800 / size}px`;
            square.style.height = `${800 / size}px`;
            row.appendChild(square);
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'grey';
            });
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
}  
makeGrid(size);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    size = +prompt('Select number of squares per side (maximum of 100): ');
    grid.replaceChildren();
    makeGrid(size);
})



