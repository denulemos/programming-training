const isValidEmail = require("../ejer39");

test("isValidEmail should be defined", () => {
    expect(isValidEmail(5)).toBeDefined();
});

test("isValidEmail should return true", () => {
    expect(isValidEmail("denu@gmail.com")).toEqual(true)
});

test("isValidEmail should return false", () => {
    expect(isValidEmail("denugmail.com")).toEqual(false)
});
