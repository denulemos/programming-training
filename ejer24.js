const isPermutation = (arrayOfNumbers, numberToPermutate) => {
  for (let i = 0; i < numberToPermutate; i++) {
    if (arrayOfNumbers.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
};

console.log(isPermutation([1, 2, 3, 4, 5], 5)); // true
console.log(isPermutation([3, 4, 6], 6)); // false
