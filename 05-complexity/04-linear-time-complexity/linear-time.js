/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
}

const arr = [1,2,3,4,5];
console.time("Loop 1");
sumArray(arr);
console.timeEnd("Loop 1");


const arr2 = Array.from({ length: 1000000 }, (_, index) => index + 1);
console.time("Loop 2");
sumArray(arr2);
console.timeEnd("Loop 2");
