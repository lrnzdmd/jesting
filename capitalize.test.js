const capitalize = require("./capitalize");

test("capitalize first letter of string", () => {
    expect(capitalize("abc")).toBe("Abc");
})

test("another test", () => {
    expect(capitalize("cba")).toBe("Cba");
})
