document.getElementById('convert').addEventListener('click', () => {
    const input = document.getElementById('textInput').value;
    // Convert to full-width characters
    let output = '';
    for (let ch of input) {
        const code = ch.charCodeAt(0);
        if (code >= 33 && code <= 126) {
            output += String.fromCharCode(code + 0xFEE0);
        } else {
            output += ch;
        }
    }
    document.getElementById('output').textContent = output || 'ＶＡＰＯＲＷＡＶＥ';
});
