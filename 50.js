const hasLoop = (numbers) => {
  let counter = 0;

  // para separar cada numero debemos pasarlo a array
  let numberArray = numbers.toString().split("");

  for (number of numberArray) {
    if (number === "0" || number === "6" || number == "8") {
      counter++;
    } else if (number == "8") {
      counter += 2;
    }
  }

  return counter;
};

module.exports = hasLoop;
