const isCapicua = require("../ejer29");


test("isCapicua should be defined", () => {
    expect(isCapicua(2003)).toBeDefined()
});
test("isCapicua should return false", () => {
    expect(isCapicua(2003)).toEqual(false)
});
test("isCapicua should return true", () => {
    expect(isCapicua(2002)).toEqual(true)
});
