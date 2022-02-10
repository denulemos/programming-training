const formPhrases = require("../ejer44");

const expectedResult = [ 'denu lemos', 'como va che' ];

test("formPhrases should be defined", () => {
    expect(formPhrases(["denu lemos", "hola", "como va che"])).toBeDefined();
});

test("formPhrases should return expected", () => {
    expect(formPhrases(["denu lemos", "hola", "como va che"])).toEqual(expectedResult)
});
