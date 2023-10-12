const isValidIPv4 = (ipv4Str) => {
  const octets = ipv4Str.split(".");

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => octet >= 0 && octet <= 255 && octet === parseInt(octet).toString());

};

module.exports = isValidIPv4;
