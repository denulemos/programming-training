const myMovies = require("../ejer19");

const moviesMock = [
    {title: "El señor de los anillos",
    directedBy: "Deno Lemon",
    seen: true},
    {title: "El señor de los anillos 2",
    directedBy: "Deno Lemon",
    seen: true},
    {title: "El señor de los anillos 3",
    directedBy: "Deno Lemon",
    seen: false},
    {title: "High School Musical",
    directedBy: "Deno Lemon",
    seen: false},
]

const expectedResult = 'I have seen "El señor de los anillos" directed by Deno Lemon \nI have seen "El señor de los anillos 2" directed by Deno Lemon \nI have not seen "El señor de los anillos 3" directed by Deno Lemon \nI have not seen "High School Musical" directed by Deno Lemon \n';

test("myMovies should be defined", () => {
    expect(myMovies(moviesMock)).toBeDefined();
});

test("myMovies should return expected", () => {
    expect(myMovies(moviesMock)).toEqual(expectedResult)
});
