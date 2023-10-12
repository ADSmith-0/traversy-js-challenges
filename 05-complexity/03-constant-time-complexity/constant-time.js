/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function accessIndex(arr, index) {
  return arr[index];
}

const arr1 = [1,2,3,4,5];
console.time("Access Element 3");
console.log(accessIndex(arr1, 3));
console.timeEnd("Access Element 3");

const arr2 = [];
for (let i = 0; i < 10000; i++) {
  arr2.push(i);
}
console.time("Access Element 3000");
console.log(accessIndex(arr2, 3000));
console.timeEnd("Access Element 3000");
