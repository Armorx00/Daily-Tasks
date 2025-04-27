// Select the input and button elements
const inputField = document.getElementById('inputField');
const toggleButton = document.getElementById('toggleButton');

// Add click event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the disabled property of the input field
    inputField.disabled = !inputField.disabled;
});

// Example HTML structure for reference
// <input type="text" id="inputField" />
// <button id="toggleButton">Enable/Disable</button>