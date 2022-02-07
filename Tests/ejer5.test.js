const porcentajeCalculator = require("../ejer5");

test("porcentajeCalculator should be defined", () => {
    expect(porcentajeCalculator(100, 10)).toBeDefined();
});

test("porcentajeCalculator should return 10", () => {
    expect(porcentajeCalculator(100, 10)).toBe(10)
});
