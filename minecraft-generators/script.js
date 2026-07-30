document.getElementById('generate').addEventListener('click', () => {
    const radius = parseInt(document.getElementById('radius').value) || 5;
    let layers = [];
    for (let y = -radius; y <= radius; y++) {
        let row = '';
        for (let x = -radius; x <= radius; x++) {
            for (let z = -radius; z <= radius; z++) {
                if (x*x + y*y + z*z <= radius*radius) {
                    row += '⬛';
                    break;
                }
            }
        }
        if (row) layers.push(row);
    }
    document.getElementById('output').textContent = layers.join('\n');
});
