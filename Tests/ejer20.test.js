const isAnAnagram = require("../ejer20");

test("isAnAnagram should be defined", () => {
    expect(isAnAnagram("Sergio", "Riesgo")).toBeDefined();
});

test("isAnAnagram should return true", () => {
    expect(isAnAnagram("Sergio", "Riesgo")).toEqual(true)
});
