function generateHashtag(str) {
  if (!str || str.length > 140) {
    return false;
  }

  return "#" + str.split(" ").filter(Boolean).map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join("");
}

module.exports = generateHashtag;
