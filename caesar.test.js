const caesar = require("./caesar");

test("shift characters by n", () => {
    expect(caesar("abc",3)).toBe("def");
})

test("also shift uppercase", () => {
    expect(caesar("AbCd", 3)).toBe("DeFg");
})