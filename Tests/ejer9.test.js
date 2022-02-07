const matchArrays = require("../ejer9");

test("matchArrays should be defined", () => {
    expect(matchArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeDefined();
});

test("matchArrays should return [1, 2, 3, 4, 5]", () => {
    expect(matchArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5])
});

test("matchArrays should return ['denu', 'lemon']", () => {
    expect(matchArrays(['denu', 'lemon', 'hola'], ['denu', 'lemon', 'deno', 'javascript'])).toStrictEqual(['denu', 'lemon'])
});
