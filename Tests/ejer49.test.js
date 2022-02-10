const propertyExists = require("../ejer49");

test("propertyExists should be defined", () => {
    expect(propertyExists({name: 'denu'}, 'name')).toBeDefined();
});

test("propertyExists should return true", () => {
    expect(propertyExists({name: 'denu'}, 'name')).toEqual(true)
});
