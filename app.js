const colors = ['green', 'red', 'rgba(133, 122, 200)', 'f15025']

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',() => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber].toUpperCase();

    // this will also work as before
    // var randomNumber1 = function fended(){return Math.floor(Math.random() * colors.length)};
    // document.body.style.backgroundColor = colors[randomNumber1()];
    // color.textContent = colors[randomNumber1()];
} );

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}