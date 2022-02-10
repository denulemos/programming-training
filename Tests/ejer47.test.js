const getHobbiesCount = require("../ejer47");

const expectedResult = { cine: 4, musica: 4, bordado: 4, surf: 3, cocina: 5, tecnologia: 4 };

const users = [
    {name: 'denu', hobbie: ['cine', 'musica', 'bordado']},
    {name: 'deno', hobbie: ['surf', 'cocina', 'tecnologia']},
    {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
    {name: 'denu', hobbie: ['cocina', 'surf', 'tecnologia']},
    {name: 'denu', hobbie: ['cine', 'bordado', 'cocina']},
    {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
    {name: 'denu', hobbie: ['surf', 'cocina', 'bordado']},
    {name: 'denu', hobbie: ['bordado', 'musica', 'cocina']},
];

test("getHobbiesCount should be defined", () => {
    expect(getHobbiesCount(users)).toBeDefined();
});

test("getHobbiesCount should return expected", () => {
    expect(getHobbiesCount(users)).toEqual(expectedResult)
});
