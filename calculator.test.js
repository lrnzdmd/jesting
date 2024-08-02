const calculator = require("./calculator");

test("calculator add", () => {
    expect(calculator.add(1,1)).toBe(2);
});

test("calculator subtract", () => {
    expect(calculator.subtract(2,1)).toBe(1);
})

test("calculator multiply", () => {
    expect(calculator.multiply(2,6)).toBe(12);
})

test("calculator divide", () => {
    expect(calculator.divide(20,5)).toBe(4);
})