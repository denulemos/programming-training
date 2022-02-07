const searchVocals = require("../ejer16");

const expectedResult = 10;

test("searchVocals should be defined", () => {
    expect(searchVocals("Hola como estas todo bien")).toBeDefined();
});

test("searchVocals should return expected", () => {
    expect(searchVocals("Hola como estas todo bien")).toEqual(expectedResult)
});
