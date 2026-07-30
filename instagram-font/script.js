document.getElementById('bold').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.style.fontWeight = output.style.fontWeight === 'bold' ? 'normal' : 'bold';
});
document.getElementById('italic').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.style.fontStyle = output.style.fontStyle === 'italic' ? 'normal' : 'italic';
});
document.getElementById('textInput').addEventListener('input', () => {
    const input = document.getElementById('textInput');
    document.getElementById('output').textContent = input.value || 'INSTA';
});
