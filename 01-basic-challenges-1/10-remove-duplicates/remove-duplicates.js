function removeDuplicates(arr) {
  // With Sets
  // return Array.from(new Set(arr));

  // With for loop
  const duplicates = [];
  const set = [];

  for (let i = 0; i < arr.length; i++) {
    if (duplicates.includes(arr[i])) {
      continue;
    }

    set.push(arr[i]);
    duplicates.push(arr[i]);
  }
  
  // Better implementation from solution
  // for (let i = 0; i < arr.length; i++) {
  //   if (!set.includes(arr[i])) {
  //     set.push(arr[i]);
  //   }
  // }

  return set;
}

module.exports = removeDuplicates;
