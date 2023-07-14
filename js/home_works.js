//MOVE BLOCK
//// Home work 1
const childBlock = document.querySelector('.child_block')
let positionX = 0
let positionY = 0

const move = () =>{
  if( positionX < 449 && positionY == 0){
   positionX++
   childBlock.style.left = `${positionX}px`
   setTimeout(move, 10)
  } else if (positionX >= 449 && positionY < 449){
   positionY++ 
   childBlock.style.top = `${positionY}px`
   setTimeout(move, 10) 
  } else if (positionY >= 449 && positionX > 0){
   positionX--
   childBlock.style.left =`${positionX}px`
   setTimeout(move, 10) 
  } else if (positionY > 0 && positionX == 0){
    positionY--
    childBlock.style.top = `${positionY}px`
    setTimeout(move, 10) 
   }
} 

move()

// Home work 2

const minutesBlock = document.querySelector('#minutes');
const secondsBlock = document.querySelector('#seconds');
const mlsecondsBlock = document.querySelector('#ml-seconds');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startTimer = () => {
   milliseconds++;
   mlsecondsBlock.innerHTML = milliseconds;

  if(milliseconds > 99){
    seconds++
    secondsBlock.innerHTML = '0' +seconds 
    
    milliseconds = 0;
  }
  if(seconds > 9){
    secondsBlock.innerHTML =  seconds 
  }
  if(seconds > 59){
    minutes++
    minutesBlock.innerHTML = '0' + minutes;

    seconds = 0;
    secondsBlock.innerHTML = '0' +seconds
  }
  if (minutes > 9){
    minutesBlock.innerHTML = minutes;
  }
};

btnStart.addEventListener('click', () => {
  clearInterval(interval);
 interval = setInterval(startTimer, 10)
});
btnStop.addEventListener('click', () => {
clearInterval(interval)
});
btnReset.addEventListener('click', () => {
  clearInterval(interval);
   minutes = 0;
   seconds = 0;
   milliseconds = 0;
  minutesBlock.innerHTML = '00';
  secondsBlock.innerHTML = '00';
  mlsecondsBlock.innerHTML = '00';
});