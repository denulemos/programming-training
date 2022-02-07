const searchWord = require("../ejer3");

test("searchWord should be defined", () => {
    expect(searchWord("hola", "hola, como va hola")).toBeDefined();
});

test("searchWord should return 2", () => {
    expect(searchWord("hola", "hola, como va hola")).toBe(2)
});

test("searchWord should return 0", () => {
    expect(searchWord("denu", "hola, como va hola")).toBe(0)
});