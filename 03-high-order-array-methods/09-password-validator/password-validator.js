function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }

  const hasCapital = !!password.match(/[A-Z]/g)?.length ?? false;
  const hasLowerCase = !!password.match(/[a-z]/g)?.length ?? false;
  const hasDigit = !!password.match(/[0-9]/g)?.length ?? false;

  return hasCapital && hasLowerCase && hasDigit;

  // const hasCaptial = false;
  // const hasLowerCase = false;
  // const hasDigit = false;
  //
  // for (let i = 0; i < password.length; i++) {
  //    etc... more efficient
  // }
}

module.exports = validatePassword;
