const container = document.querySelector('.gridContainer');
const grid = document.querySelector('.grid')
let size = 16;

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        for (let j = 0; j < size; j++) {
            let overlay = document.createElement('div');
            overlay.classList.add('overlay');
            let square = document.createElement('div');
            square.classList.add('square')
            square.appendChild(overlay);
            square.style.width = `${700 / size}px`;
            square.style.height = `${700 / size}px`;
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);

    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'grey';
            square.style.cursor = 'pointer';
            let overlay = square.querySelector('.overlay');
            let currentOpacity = parseFloat(getComputedStyle(overlay).opacity);
            overlay.style.opacity = Math.min(1, currentOpacity + 0.1);
        })
    });
}  

makeGrid(size);

/* User input functionality */
const enterButton = document.querySelector('#enter');
const userInput = document.querySelector('input');
enterButton.addEventListener('click', () => {
    grid.replaceChildren();
    let size = Number(userInput.value);
    makeGrid(size);
    userInput.value = '';
    userInput.focus();
});

/* Toggle functionality */
const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        let border = getComputedStyle(square).border;
        console.log(border)
        if (border === '1px solid rgb(0, 0, 0)') {
            console.log('here')
            square.style.border = 'none';
        } else {
            console.log('here2')
            square.style.border = '1px solid rgb(0, 0, 0)';
        }
    })
});

/* Clear functionality */
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        let fill = getComputedStyle(square).backgroundColor;
        let overlay = square.querySelector('.overlay');
        overlay.style.opacity = '0';
        console.log(fill);
        if (fill !== 'rgba(0, 0, 0, 0)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    })
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

/* Random color functionality */
const random = document.querySelector('#randomize');
random.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    let text = random.textContent;
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = (text === 'Randomize') ? randomColor() : 'grey';
        })
    });
    if (text === 'Randomize') {
        random.textContent = 'Un-randomize';
    } else {
        random.textContent = 'Randomize';
    }
});


