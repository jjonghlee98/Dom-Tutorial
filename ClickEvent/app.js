const btn = document.querySelector('#btn2');

btn.onclick = function() {
    console.log('YOU CLICKED ME!!');
    console.log('I HOPE IT WORKED!!');
}

function scream() {
    console.log('AAAAAAAH');
    console.log("STOP TOUCHING ME!!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1');
}

// const btn2 = document.querySelector('#btn3');

// btn2.ondblclick = () => {
//     alert('you cliked the button3');
// }


const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert('Clicked');
})

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('dblclick', () => {
    alert('Clicked');
})


// const btn4 = document.querySelector('#btn4');
// btn4.addEventListener('mouseup', () => {
//     alert('Clicked');
// })

function twist() {
    console.log('TWIST');
}

function shout() {
    console.log('SHOUT');
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = shout;
// tasButton.onclick = twist;

tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout, {once: true});