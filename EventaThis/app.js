// const buttons = document.querySelectorAll('button');
// const h1s = document.querySelectorAll('h1');

// const makeRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// for(let button of buttons) {
//   button.addEventListener('click', colorize);
// }

// for(let h1 of h1s) {
//   h1.addEventListener('click', colorize);
// }

// function colorize() {
//   this.style.backgroundColor = makeRandomColor();
//   this.style.color = makeRandomColor();
// }

document.querySelector('button').addEventListener('click', function(evt) {
  console.log(evt);
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e) {
//   console.log(e.key);
//   console.log(e.code);
// })

window.addEventListener('keydown', function(e) {
  switch(e.code){
    case 'ArrowUp':
      console.log('UP!');
      break;
    case 'ArrowDown':
      console.log('Down');
      break;
    case 'ArrowLeft':
      console.log('Left');
      break;
    case 'ArrowRight':
      console.log('Right');
      break;
  }
})