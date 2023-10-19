const nameMap = new Map([
  [1, "John"],
  [2, "Jane"],
  [3, "Joe"],
]);

console.log(nameMap);

const obj = { a: 1 };
const fn = () => {};

const newMap = new Map([
  [null, "error: value is null"],
  [undefined, "error: value is undefined"],
  [obj, "hello"],
  [fn, "world"],
]);

console.log(newMap.get(obj));

nameMap.set(4, "Jack");
nameMap.set(5, "Jill");

console.log(nameMap);

console.log(nameMap.has(1));
console.log(nameMap.has(6));

for (const [key, value] of nameMap) {
  console.log(key, value);
}

nameMap.clear();
console.log(nameMap);
console.log(nameMap.size);
