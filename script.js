function capitalizeString(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str){
	var p = str.split("");
	var rev = p.reverse();
	return rev.join("");
}





class Calculator {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

function ceaserCipher(s) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let cipheredText = "";
  for (let i = 0; i < s.length; i++) {
    const index = alphabets.indexOf(s[i].toLowerCase());
    if (index === -1) {
      cipheredText += s[i];
      continue;
    }
    const newIndex = (index + 1) % 26;
    const newLetter = alphabets[newIndex];
    cipheredText +=
      s[i] === s[i].toUpperCase() ? newLetter.toUpperCase() : newLetter;
  }
  return cipheredText;
}

function analyzeArray(arr) {
  const result = {};
  result.average =
    arr.reduce((prev, curr) => {
      return prev + curr;
    }, 0) / arr.length;

  result.min = arr.reduce((prev, curr) => {
    if (curr < prev) {
      return curr;
    }
    return prev;
  }, arr[0]);

  result.max = arr.reduce((prev, curr) => {
    if (curr > prev) {
      return curr;
    }
    return prev;
  }, arr[0]);

  result.length = arr.reduce((prev, curr) => {
    return prev + 1;
  }, 0);

  return result;
}

module.exports = {
  capitalizeString,
  reverseString,
  Calculator,
  ceaserCipher,
  analyzeArray,
};