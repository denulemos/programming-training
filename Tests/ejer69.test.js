const selectionSort = require('../ejer69.js');

test("selectionSort should be defined", () => {
    expect(selectionSort([100,-40,500,-124,0,21,7])).toBeDefined();
});

test("selectionSort should work ", () => {

expect(selectionSort([100,-40,500,-124,0,21,7])).toEqual([-124, 21, -40, 0, 7, 100, 500]);

});






