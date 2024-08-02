function caesar(string, n) {
    n = n % 26;

    let shiftedString = "";
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i)

        if (char >= 65 && char <= 90) {
            shiftedString += String.fromCharCode(((char - 65 + n) % 26) + 65);
        }
        if (char >= 97 && char <= 122) {
            shiftedString += String.fromCharCode(((char - 97 + n) % 26) + 97);
        }
        

    }
    return shiftedString;
}

module.exports = caesar;