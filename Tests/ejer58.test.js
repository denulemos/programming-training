const searchColumn = require("../ejer58");

const testCase1 = "AA";


test("searchColumn should be defined", () => {
    expect(searchColumn(testCase1)).toBeDefined();
});


test("searchColumn should return 676", () => {
    expect(searchColumn(testCase1)).toEqual(27)
});


