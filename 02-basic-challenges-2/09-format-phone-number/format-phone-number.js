function formatPhoneNumber(arr) {
  const firstThird = arr.slice(0, 3);
  const secondThird = arr.slice(3, 6);
  const thirdThird = arr.slice(6);

  return `(${firstThird.join("")}) ${secondThird.join("")}-${thirdThird.join("")}`;
}

module.exports = formatPhoneNumber;
