const mergeSort = require('../ejer68.js');

test("mergeSort should be defined", () => {
    expect(mergeSort([100,-40,500,-124,0,21,7])).toBeDefined();
});

test("mergeSort should work ", () => {

expect(mergeSort([100,-40,500,-124,0,21,7])).toEqual([-124, -40, 0, 7, 21, 100, 500]);

});






