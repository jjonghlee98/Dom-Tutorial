function sumArray(array) {
  let sum = 0;
  for(let test of array) {
    sum += test;
  }
  return sum;
}

sumArray([1,2,3]);