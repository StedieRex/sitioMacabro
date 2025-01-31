// script.js
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = (images.length)-1;

document.getElementById('nextBtn').addEventListener('click', () => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', () => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    images[currentImageIndex].classList.add('active');
});
