// check a string is permuation of another
// input stringA = 'god', stringB = 'rod' Output: false
function permuationOfOther(stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return false;
    }
    const charHash = new Array(128).fill(0);
    for (let i = 0; i < stringA.length; i++) {
        const charCode = stringA.charCodeAt(i);
        charHash[charCode]++;
    }

    for (let j = 0; j < stringB.length; j++) {
        const charCode = stringB.charCodeAt(j);
        charHash[charCode]--;
        if (charHash[charCode] < 0) {
            return false;
        }
    }
    return true;
}

console.log(permuationOfOther('dog', 'rod'));