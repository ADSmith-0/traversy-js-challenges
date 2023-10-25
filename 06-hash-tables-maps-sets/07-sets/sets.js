const nameSet = new Set(["John", "Jane", "Joe", "Jane", "Joe"]);

console.log(nameSet);

nameSet.add("Jack");
nameSet.add("Jill");

console.log(nameSet);

console.log(nameSet.has("Jack"));

nameSet.delete("Jack");

console.log(nameSet.has("Jack"));

console.log(nameSet.size);
