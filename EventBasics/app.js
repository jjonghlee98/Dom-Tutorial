// function sumArray(array) {
//   let sum = 0;
//   for(let test of array) {
//     sum += test;
//   }
//   return sum;
// }
//
// sumArray([1,2,3]);

// setTimeout(() => console.log('setTimeout TEST'), 3000);
// setInterval(() => console.log(Math.random()), 3000);

// const movies = [
//     {
//         title: 'Alien',
//         score: 90
//     },
//     {
//         title: 'Hanjo',
//         score: 100
//     },
//     {
//         title: 'genji',
//         score: 20
//     },
//     {
//         title: 'Eun hee',
//         score: 100
//     }
// ]
//
//
// movies.forEach(movie => console.log(`${movie.title} - ${movie.score}`))

const user = {
    email: 'jjonghlee98@gmail.com',
    firstName: 'Jonghwan',
    lastName: 'Lee',
    born: 1998,
    // died: 3000,
    city: 'seoul',
    state: 'paju'
}

// const { email, firstName, lastName, city, bio } = user;
// const { born } = user;
// const { born: birthYear, died: deathYear } = user;

const { city, state, died = 'N/A' } = user;