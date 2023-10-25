function phoneNumberDirectory(arr) {
  const phoneDirectory = new Map();

  for (let i = 0; i < arr.length; i++) {
    const entry = arr[i];
    const [name, number] = entry.split(":");

    phoneDirectory.set(name, number);
  }

  return phoneDirectory;
}

module.exports = phoneNumberDirectory;
