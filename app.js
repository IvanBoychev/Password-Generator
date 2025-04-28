const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordEl1 = document.getElementById("password1");
let passwordEl2 = document.getElementById("password2");
let passwordLength = 15;

function generate() {
    let output1 = "";
    let output2 = "";
    
    for (let i = 0; i < passwordLength; i++) {
        output1 += characters[Math.floor(Math.random() * characters.length)];
        output2 += characters[Math.floor(Math.random() * characters.length)];
        }
    
    passwordEl1.textContent = output1;
    passwordEl2.textContent = output2;
}