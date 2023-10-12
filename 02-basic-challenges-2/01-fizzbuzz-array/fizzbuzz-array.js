function fizzBuzzArray(num) {
  const fizzBuzzArr = [];

  for (let i = 1; i <= num; i++) {
    if (!(i % 15)) {
      fizzBuzzArr[i] = "FizzBuzz";
      continue;
    }

    if (!(i % 3)) {
      fizzBuzzArr[i] = "Fizz";
      continue;
    }

    if (!(i % 5)) {
      fizzBuzzArr[i] = "Buzz";
      continue;
    }

    fizzBuzzArr[i] = i;
  }

  fizzBuzzArr.shift();

  return fizzBuzzArr;
}

module.exports = fizzBuzzArray;
