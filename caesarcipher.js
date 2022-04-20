/** Caesar cipher took its name from Julius Caesar who used it while writing letters to Cicero. 
Interesting thing is that this code was still used in 1915 by the Russian army because only 
such a simple cipher seemed understandable for staff officers.
The cipher works as follows:
Each letter from an decrypted text is changed to another letter from the Latin alphabet. 
According to the rule it has to be the third letter on the right from the one we want to encrypt. 
Thus the letter A is encrypted as D, letter B as E, etc. The letter Z is changed to C. 
In order to decrypt the text we repeat the operation by moving letters by three positions to the left.
As an input you get a text that contains only uppercase letters of the Latin alphabet, spaces and newline characters. 
The length of input does not exceed 200 characters.
Output should contain text encrypted with the Caesar cipher.
Input: ABC DEF
Output: DEF GHI
Input: TERA EST ROTUNDA
Output: WHUD HVW URWXQGD
'''
**/
function encryptMessage(str, increment) {
    let encryptedString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            encryptedString += ' ';
        } else {
            let charCode = ((((str.charCodeAt(i) - 'A'.charCodeAt(0)) + increment)) % 26) + 65;
            encryptedString += String.fromCharCode(charCode);
        }
    }
    return encryptedString;
}

console.log(encryptMessage('TERA EST ROTUNDA', 3));