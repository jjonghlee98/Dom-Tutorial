// WRITE YOUR CODE IN HERE:

const li = document.querySelectorAll('li');
const highlight = document.querySelectorAll('.highlight');

// 기본적인 반복문 사용 방법 기억할 것
for(let i=0; i<li.length; i++) {
    li[i].classList.add('highlight');
}

for(let j=0; j<highlight.length; j++) {
    highlight[j].classList.toggle('highlight');
}