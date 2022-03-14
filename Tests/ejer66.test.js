const removeDuplicates = require('../ejer66.js');

test("removeDuplicates should be defined", () => {
    expect(removeDuplicates("missisipi")).toBeDefined();
});

test("removeDuplicates should work mississippi", () => {

expect(removeDuplicates("mississippi")).toEqual("m");


});

test("removeDuplicates should work", () => {

    expect(removeDuplicates("aabbcccrreejfksssaaccc")).toEqual("cjfksc");
    
    
    });





