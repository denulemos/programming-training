const mostRepeatedElement = require("../ejer37");

const expectedResult = 'El elemento mas repetido es "como" por 2 apariciones';
const expectedResultNumbers = 'El elemento mas repetido es "2" por 3 apariciones';

test("mostRepeatedElement should be defined", () => {
    expect(mostRepeatedElement("hola como andas ? denu esta bien y vos como andas")).toBeDefined();
});

test("mostRepeatedElement should return expected", () => {
    expect(mostRepeatedElement("hola como andas ? denu esta bien y vos como andas")).toEqual(expectedResult)
});

test("mostRepeatedElement should return expectedResultNumbers", () => {
    expect(mostRepeatedElement([1,2,2,2,3,4])).toEqual(expectedResultNumbers)
});