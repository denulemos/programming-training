const removeDuplicates = require('../ejer67.js');

test("removeDuplicates should be defined", () => {
    expect(removeDuplicates("misssisssipppi", 2)).toBeDefined();
});

test("removeDuplicates should work mississippi", () => {

expect(removeDuplicates("misssisssipppi", 2)).toEqual("misisipi");


});

test("removeDuplicates should work", () => {

    expect(removeDuplicates("aabbcccrreejfksssaaccc", 3)).toEqual("abrejfka");
    
});





