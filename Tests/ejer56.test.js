const getLongestPrefix = require("../ejer56");

const testCase1 = ["abc", "abcd", "abce", "abcf"];
const testCase2 = ["flower", "flow", "flight"];
const testCase3 = ["dog", "racecar", "car"];


test("getLongestPrefix should be defined", () => {
    expect(getLongestPrefix(testCase1)).toBeDefined();
});


test("getLongestPrefix should return abc", () => {
    expect(getLongestPrefix(testCase1)).toEqual('abc')
});

test("getLongestPrefix should return fl", () => {
    expect(getLongestPrefix(testCase2)).toEqual('fl')
});

test("getLongestPrefix should return empty", () => {
    expect(getLongestPrefix(testCase3)).toEqual('')
});

