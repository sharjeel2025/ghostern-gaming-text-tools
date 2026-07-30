document.getElementById('imageUpload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            document.getElementById('preview').src = ev.target.result;
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById('invert').addEventListener('click', () => {
    const img = document.getElementById('preview');
    if (img.src) {
        img.style.filter = img.style.filter === 'invert(100%)' ? 'none' : 'invert(100%)';
    }
});
