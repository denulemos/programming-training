const {sumaRecursiva,sumaIterativa}  = require("../ejer60");



test("sumaRecursiva should be defined", () => {
    expect(sumaRecursiva(3)).toBeDefined();
});

test("sumaIterativa should be defined", () => {
    expect(sumaIterativa(3)).toBeDefined();
});


test("sumaRecursiva should return 6", () => {
    expect(sumaRecursiva(3)).toEqual(6)
});

test("sumaIterativa should return true", () => {
    expect(sumaIterativa(3)).toEqual(6)
});


