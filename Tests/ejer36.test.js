const vowelsAndConsonants = require("../ejer36");

const expectedResult = `Vowels: 11 \nConsonants: 14`;

test("vowelsAndConsonants should be defined", () => {
    expect(vowelsAndConsonants('javascript holááá 223425 cómo andás')).toBeDefined();
});

test("vowelsAndConsonants should return expected", () => {
    expect(vowelsAndConsonants('javascript holááá 223425 cómo andás')).toEqual(expectedResult)
});
