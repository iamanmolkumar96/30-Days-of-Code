// program to replace %20 when a space appear
function urlify(str) {
    let temp = '';
    for (i = 0; i < str.length; i++) {
        temp += str[i] == ' ' ? '%20' : str[i];
    }
    return temp;
}

console.log(urlify('Anmol Kumar'));