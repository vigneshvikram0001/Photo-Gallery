const model = document.createElement('div');
model.id = 'model';
document.body.appendChild(model);

const images = document.querySelectorAll('.image');

images.forEach(img => {
    img.addEventListener('click', () => {
        model.classList.add('active');
        const images = document.createElement('img');
        images.src = img.src;
        images.id = 'hover';
        while (model.firstChild) {
            model.removeChild(model.firstChild)
        }
        model.append(images)
    })
});
model.addEventListener('click', () => {
    model.classList.remove('active');
})

