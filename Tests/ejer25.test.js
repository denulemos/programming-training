const toMayusOrMinus = require("../ejer25");

const expectedResult = "hola soy deno lemon";
const expectedResultSecond = "HOLA SOY DENO LEMON";

test("toMayusOrMinus should be defined", () => {
    expect(toMayusOrMinus("hola soy deno lemon")).toBeDefined()
});
test("toMayusOrMinus should return expectedResult", () => {
    expect(toMayusOrMinus("hola soy deno lemon")).toEqual(expectedResult)
});

test("toMayusOrMinus should return expectedResultSecond", () => {
    expect(toMayusOrMinus("hOLA SOY dENO lemON")).toEqual(expectedResultSecond)
});

