const countWords = require('../ejer73.js');

const expected = [ 'hola: 2',
'estas: 1',
'como: 2',
'me: 1',
'bien: 2',
'alegro: 1',
'todo: 2',
'andas: 1' ];

test("countWords should be defined", () => {
    expect(countWords("Hola! como estas? todo bien? me alegro! hola! como andas? todo bien?")).toBeDefined();
});

test("countWords should be expected", () => {
    expect(countWords("Hola! como estas? todo bien? me alegro! hola! como andas? todo bien?")).toEqual(expected);
});

test("countWords should be No hay palabras when empty", () => {
    expect(countWords("")).toEqual("No hay palabras");
});




