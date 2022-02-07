const censor = require("../ejer11");

const expectedResult = "[-CENSURADO-], como estas? [-CENSURADO-]";

test("censor should be defined", () => {
    expect(censor("test test")).toBeDefined();
});

test("censor should return expected", () => {
    expect(censor("Hola, como estas? Hola", "Hola")).toEqual(expectedResult)
});
