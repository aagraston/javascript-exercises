const reverseString = function (str) {
  strReversed = ""

  for (let i = str.length - 1; i >= 0; i--) {
    strReversed = strReversed.concat(str.charAt(i))
  }

  return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
