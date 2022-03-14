const sumaRecursiva = require("../ejer61");



test("sumaRecursiva should be defined", () => {
    expect(sumaRecursiva(10)).toBeDefined();
});


test("sumaRecursiva should return 28", () => {
    expect(sumaRecursiva(10)).toEqual(28)
});

test("sumaRecursiva should return Error", () => {
    expect(sumaRecursiva(9)).toEqual("Error")
});



