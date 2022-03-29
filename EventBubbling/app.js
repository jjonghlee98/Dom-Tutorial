const container = document.querySelector('#container');
const button = document.querySelector('#changeColor');


button.addEventListener('click', function(e) {
  container.style.backgroundColor =  makeRandomColor();
  e.stopPropagation(); // 버블링에서 벗어남
})

container.addEventListener('click', function() {
  container.classList.toggle('hide');
})

function makeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}