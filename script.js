function caesarCipher(text, shift, decrypt = false) {
    let result = "";
    if (decrypt) {
        shift = -shift; // Reverse shift for decryption
    }
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

function convertCipher(encrypt = true) {
    let text = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shiftKey").value);
    
    if (isNaN(shift) || shift < 1 || shift > 25) {
        alert("Please enter a valid shift key between 1 and 25");
        return;
    }
    
    let outputText = caesarCipher(text, shift, !encrypt);
    document.getElementById("outputText").value = outputText;
}
