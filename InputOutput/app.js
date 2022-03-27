// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('change', function(e) {
//   e.preventDefault();
//   console.log('adfaasdfaf');
// })


// input.addEventListener('input', function(e) {
//   e.preventDefault();
//   h1.innerText = input.value;
//   console.log('fasdfadsfa');
// })


// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', function(e) {
//   h1.innerText = `${input.value}`;
// })


// 연습예제
const h1 = document.querySelector('h1');
const username = document.querySelector('#username');

username.addEventListener('input', function(e) {
  if(username.value === '') {
    h1.innerText = 'Enter Your Username';
  } else {
    h1.innerText = `Welcome, ${username.value}`;
  }
})