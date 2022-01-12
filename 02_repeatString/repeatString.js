const repeatString = function (str, howManyStrings) {
  returnStr = "";

  if (howManyStrings < 0) {
    returnStr = "ERROR";
  }
  else {

    for (let i = 1; i <= howManyStrings; i++) {
      returnStr = returnStr.concat(str);
    }
    
  }

  return returnStr;

};

// Do not edit below this line
module.exports = repeatString;
