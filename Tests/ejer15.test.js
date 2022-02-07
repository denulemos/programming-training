const letterRepeated = require("../ejer15");

const expectedResult = "La letra mas repetida es la o con 5 repeticiones";

test("letterRepeated should be defined", () => {
    expect(letterRepeated("Hola como estas todo bien")).toBeDefined();
});

test("letterRepeated should return expected", () => {
    expect(letterRepeated("Hola como estas todo bien")).toEqual(expectedResult)
});
