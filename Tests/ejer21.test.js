const cutText = require("../ejer21");

const expectedResult = "Denis";

test("cutText should be defined", () => {
    expect(cutText("Denisse", 5)).toBeDefined();
});

test("cutText should return expected", () => {
    expect(cutText("Denisse", 5)).toEqual(expectedResult)
});
