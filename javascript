function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('current-image').src = images[currentImageIndex];
}

document.getElementById('previous-arrow').addEventListener('click', previousImage);