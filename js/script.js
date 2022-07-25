const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 123 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = '80px';
        mario.style.marginLeft = '38px';

        gameBoard.style.backgroundImage = 'url("./images/lose.png")';
        gameBoard.style.backgroundRepeat = 'no-repeat';
        gameBoard.style.backgroundPosition = 'center';

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown',  jump);