function reversestring(string) {
    const inverted = string.split("").reverse().join("");
    return inverted;
}

module.exports = reversestring;