const isPermutation = (arrayOfNumbers, numberToPermutate) => {
  for (let i = 0; i < numberToPermutate; i++) {
    if (arrayOfNumbers.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
};

module.exports = isPermutation;