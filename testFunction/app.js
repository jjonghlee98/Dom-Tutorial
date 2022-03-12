// const movies = [
//   {
//     title: 'Jonghwan',
//     score: '100'
//   },
//   {
//     title: 'Hee Eun',
//     score: '99'
//   },
//   {
//     title: 'nari',
//     score: '10'
//   }
// ]

// movies.forEach(function(movie) {
//   console.log(`title: ${movie.title} - score: ${movie.score}`);
// })


const validUserNames = (array) => {
  array.forEach(function(names) {
      if(names.length < 10) {
          return names;
      }
  })
}

validUserNames(['mark', 'staceysmom1978', 'q2849238942840', 'carrie98', 'MoanaFan']);