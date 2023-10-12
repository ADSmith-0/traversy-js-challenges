function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }

  const allPerms = [];

  for (const char of str) {
    const newStr = str.replace(char, "");

    const perms = permutations(newStr);

    for (const perm of perms) {
      allPerms.push(char + perm);
    }
  }
  
  return allPerms;
}

module.exports = permutations;
