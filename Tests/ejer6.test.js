const drawSquare = require("../ejer6");

const expected = '****\n*  *\n*  *\n****';
test("drawSquare should be defined", () => {
    expect(drawSquare(4)).toBeDefined();
});

test("drawSquare should return expected", () => {
    expect(drawSquare(4)).toBe(expected)
});