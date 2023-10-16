/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/

const sumArray = (arr) => {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += i;
    for (let j = 0; j < arr.length; j++) {
      sum2 += j;
    }
  }

  return sum1 + sum2;
}


const arr = [1,2,3,4,5];
console.time("Loop 1");
sumArray(arr);
console.timeEnd("Loop 1");


const arr2 = Array.from({ length: 100000 }, (_, index) => index + 1);
console.time("Loop 2");
sumArray(arr2);
console.timeEnd("Loop 2");
