/**
 * Generates a random password with customizable options.
 * @returns {string} The generated random password.
 */

function generatePassword(length = 10, includeUppercase = true, includeLowercase = true, includeNumbers = true, includeSymbols = false) {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()-_=+';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

export {generatePassword as passcraft}
