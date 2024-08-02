const analyzearray = require("./analyzearray");

test("analyze array test", () => {
    expect(analyzearray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("min function test", () => {
    expect(analyzearray([0,8,3,4,2,7])).toStrictEqual({
        average: 4,
        min: 0,
        max: 8,
        length: 6
    })
})


test("max function test", () => {
    expect(analyzearray([0,9,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 0,
        max: 9,
        length: 6
    })
})

test("length test", () => {
    expect(analyzearray([0,9,3,4,2,6,10,20,27])).toStrictEqual({
        average: 9,
        min: 0,
        max: 27,
        length: 9
    })
})