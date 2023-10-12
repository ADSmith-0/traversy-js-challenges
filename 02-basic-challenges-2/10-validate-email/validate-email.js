function validateEmail(email) {
  const regExp = /.+\@.+\..+/gi;
  return regExp.test(email);
}

module.exports = validateEmail;
