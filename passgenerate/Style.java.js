function generatePassword() {
    // Get the input values
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;
    
    // Create the character pool
    let charPool = '';
    if (includeUppercase) charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charPool += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charPool += '0123456789';
    if (includeSpecial) charPool += '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    // Default to lowercase if nothing selected
    if (charPool === '') charPool = 'abcdefghijklmnopqrstuvwxyz';
    
    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool.charAt(randomIndex);
    }
    
    // Display the password
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}