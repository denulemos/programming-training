const flipWord = require("../ejer4");

test("flipWord should be defined", () => {
    expect(flipWord("hola")).toBeDefined();
});

test("flipWord should return aloh", () => {
    expect(flipWord("hola")).toBe("aloh")
});

test("flipWord should return uned", () => {
    expect(flipWord("denu")).toBe("uned")
});