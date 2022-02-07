const drawStairs = require("../ejer10");

const stairExpected = "[-]\n[-][-]\n[-][-][-]\n[-][-][-][-]\n[-][-][-][-][-]\n";

test("drawStairs should be defined", () => {
    expect(drawStairs(10)).toBeDefined();
});

test("drawStairs should return expected stair", () => {
    expect(drawStairs(5)).toEqual(stairExpected)
});
