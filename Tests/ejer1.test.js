const multiplyTable = require("../ejer1");

const correctAnswer = "1 x 5 = 5 2 x 5 = 10 3 x 5 = 15 4 x 5 = 20 5 x 5 = 25 6 x 5 = 30 7 x 5 = 35 8 x 5 = 40 9 x 5 = 45 10 x 5 = 50 "

test("multiplyTable should be defined", () => {
    expect(multiplyTable()).toBeDefined();
});

test("multiplyTable should work correctly", () => {
    expect(multiplyTable(5)).toBe(correctAnswer)
});