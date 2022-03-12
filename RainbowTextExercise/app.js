const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
//const text = document.querySelector('span');
const h1 = document.querySelectorAll('span');

// 반복문 사용 잘 기억할 것. 좋은 예제
for(let i=0; i<h1.length; i++) {
  for(let j=0; j<=i; j++) {
    h1[i].style.color = colors[j];
  }  
}

// 처음에 사용했던 잘못된 반복문
// for(let i=0; i<h1.length; i++) {
//   for(let j=0; j<colors.length; j++) {
//     h1[i].style.color = colors[j];
//   }
// }