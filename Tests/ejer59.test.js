const isPalindromo = require("../ejer59");



test("isPalindromo should be defined", () => {
    expect(isPalindromo('otto')).toBeDefined();
});


test("isPalindromo should return true", () => {
    expect(isPalindromo('otto')).toEqual(true)
});

test("isPalindromo should return true", () => {
    expect(isPalindromo('ostto')).toEqual(true)
});


