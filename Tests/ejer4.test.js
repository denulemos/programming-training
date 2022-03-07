const {flipWord, flipWordStack} = require("../ejer4");

test("flipWord should be defined", () => {
    expect(flipWord("hola")).toBeDefined();
});

test("flipWord should return aloh", () => {
    expect(flipWord("hola")).toBe("aloh")
});

test("flipWord should return uned", () => {
    expect(flipWord("denu")).toBe("uned")
});

test("flipWordStack should be defined", () => {
    expect(flipWordStack("hola")).toBeDefined();
});

test("flipWordStack should return aloh", () => {
    expect(flipWordStack("hola")).toBe("aloh")
});

test("flipWordStack should return uned", () => {
    expect(flipWordStack("denu")).toBe("uned")
});