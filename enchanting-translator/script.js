// Simple mapping for demo (only a few letters)
const map = {
    'A':'ᔑ','B':'ᓭ','C':'ᓚ','D':'ᑕ','E':'ᒷ','F':'⎓','G':'Ꮹ','H':'⊑','I':'╎','J':'⋮',
    'K':'ꖌ','L':'ꖎ','M':'⋔','N':'⋿','O':'⍑','P':'!','Q':'?','R':'∷','S':'ᓭ','T':'⊔',
    'U':'⚍','V':'⍊','W':'∴','X':'⌇','Y':'||','Z':'⨅'
};
document.getElementById('translate').addEventListener('click', () => {
    const input = document.getElementById('textInput').value.toUpperCase();
    let output = '';
    for (let ch of input) {
        output += map[ch] || ch;
    }
    document.getElementById('output').textContent = output || 'UNBREAKING';
});
