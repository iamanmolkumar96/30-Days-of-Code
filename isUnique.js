// find a string is contains unique character or Not
// input string ="Anmollll" output:false
function checkUniqueCharacter(string) {
    let charHash = new Array(128).fill(false);
    for (let i = 0; i < string.length; i++) {
        const charcode = string.charCodeAt(i);
        if (charHash[charcode]) {
            return false;
        }
        charHash[charcode] = true;
    }
    return true;
}

console.log(checkUniqueCharacter('tesT'));