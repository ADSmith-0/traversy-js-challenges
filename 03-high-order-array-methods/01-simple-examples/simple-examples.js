const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
numbers.map((num) => num);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
numbers.filter((num) => num % 2);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
numbers.reduce((acc, num) => acc + num, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => console.log(num));

 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
numbers.find((num) => num === 3);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
numbers.some((num) => num === 2);

/**
 * every: Checks if all array elements satisfy a condition.
 */
numbers.every((num) => num / 2);
