const generateRandom = require("../ejer42");

test("generateRandom should be defined", () => {
    expect(generateRandom(1, 100)).toBeDefined();
});
