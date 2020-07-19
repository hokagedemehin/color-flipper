const hex = [0, 1, 2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const text = document.querySelector('.text')

btn.addEventListener('click', () => {
    let hexColor = '#';
    let randomNumber = () => {return Math.floor(Math.random() * hex.length)};
    for(let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    // text.color('white')
    color.textContent = hexColor.toUpperCase();
   
});

// var randomNumber1 = function fended(){return Math.floor(Math.random() * colors.length)};