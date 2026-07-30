document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('textInput');
    const colorPicker = document.getElementById('colorPicker');
    const sign = document.getElementById('sign');
    input.addEventListener('input', () => {
        sign.textContent = input.value || 'Welcome!';
    });
    colorPicker.addEventListener('input', () => {
        sign.style.color = colorPicker.value;
    });
});
