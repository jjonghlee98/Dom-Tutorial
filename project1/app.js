// <!DOCTYPE html>

// <head>
//     <title>100 Buttons!</title>
// </head>

// <body>
//     //<!--DO NOT TOUCH THIS FILE PLEASE!-->
//     <h1>Look At All My Buttons!</h1>
//     <div id="container">
    
//     </div>
//     <script src="app.js"></script>
// </body>

// </html>

// const container = document.querySelector('#container');

// for(let i=0; i<100; i++) {
//   const buttons = document.createElement('button');
//   buttons.innerText = 'Hey!';  
//   container.appendChild(buttons);
// }

// const image = document.getElementById('#unicorn');
// const heading = document.getElementById('#mainheading');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const span = document.querySelectorAll('span');

for(let i=0; i<colors.length; i++) {
  for(let j=0; j<=i; j++) {
    span[i].style.color = colors[j];
  }
}
// for(let i=0; i<span.length; i++) {
//   for(let j=0; j<=i; j++) {
//     span[i].style.color = colors[j];
//   }  
// }