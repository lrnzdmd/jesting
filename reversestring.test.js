const reversestring = require("./reversestring");

test("reverse a string", () => {
    expect(reversestring("abc")).toBe("cba");
})

test("reverse another string", () => {
    expect(reversestring("banana")).toBe("ananab");
})


