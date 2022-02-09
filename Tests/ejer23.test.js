const {capitalLetter , capitalLetterArray} = require("../ejer23");

const expectedResult = "Hola Soy Deno Lemon";

test("capitalLetter should be defined", () => {
    expect(capitalLetter("hola soy deno lemon")).toBeDefined();
});

test("capitalLetterArray should be defined", () => {
    expect(capitalLetterArray("hola soy deno lemon")).toBeDefined();
});

test("capitalLetter should return expected results", () => {
    expect(capitalLetter("hola soy deno lemon")).toEqual(expectedResult)
});

test("capitalLetterArray should return expected results", () => {
    expect(capitalLetterArray("hola soy deno lemon")).toEqual(expectedResult)
});

