const thisStringCanBeSegmented = require('../ejer94.js');

let s = "hellonow";
let dictionary = new Set(["hello", "hello", "on", "now"]);


test("thisStringCanBeSegmented should be defined", () => {
    expect(thisStringCanBeSegmented(s, dictionary)).toBeDefined();
});

test("thisStringCanBeSegmented should be true", () => {
    expect(thisStringCanBeSegmented(s, dictionary)).toEqual("String Can be Segmented");
});

test("thisStringCanBeSegmented should be false", () => {
    dictionary = new Set(["hola", "denu", "hol", "den"]);
    s = "orangutan";
    expect(thisStringCanBeSegmented(s, dictionary)).toEqual("String Can NOT be Segmented");
});




