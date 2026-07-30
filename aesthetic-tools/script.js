document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('textInput');
    const output = document.getElementById('output');
    input.addEventListener('input', () => {
        output.textContent = input.value || 'PIXEL';
    });
});
