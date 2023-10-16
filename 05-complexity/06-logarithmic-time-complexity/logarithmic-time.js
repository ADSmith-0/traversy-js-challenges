/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

const findPower = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
} 

console.time("Find power 1");
findPower(2, 100);
console.timeEnd("Find power 1");

console.time("Find power 2");
findPower(2, 10000000);
console.timeEnd("Find power 2");
