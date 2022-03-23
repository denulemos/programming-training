const bubbleSort = require('../ejer70.js');

test("bubbleSort should be defined", () => {
    expect(bubbleSort([100,-40,500,-124,0,21,7])).toBeDefined();
});

test("bubbleSort should work ", () => {

expect(bubbleSort([100,-40,500,-124,0,21,7])).toEqual([-124, -40, 0, 7, 21, 100, 500]);

});






