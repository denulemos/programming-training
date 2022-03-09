const {isPalindromo, isPalindromoDataStructure } = require("../ejer2");

test("isPalindromo should be defined", () => {
    expect(isPalindromo('denu')).toBeDefined();
});

test("isPalindromoDataStructure should be defined", () => {
    expect(isPalindromoDataStructure('denu')).toBeDefined();
});

test("isPalindromo should return false", () => {
    expect(isPalindromo('denu')).toBe(false)
});

test("isPalindromo should return true", () => {
    expect(isPalindromo('otto')).toBe(true)
});

test("isPalindromoDataStructure should return false", () => {
    expect(isPalindromoDataStructure('denu denu denu,,,')).toBe(false)
});

test("isPalindromoDataStructure should return true", () => {
    expect(isPalindromoDataStructure('otto')).toBe(true)
});


// TODO hacer funcionar este caso de uso
// test("isPalindromoDataStructure should return true", () => {
//     expect(isPalindromoDataStructure('A man,a plan,a canal panama')).toBe(true)
// });