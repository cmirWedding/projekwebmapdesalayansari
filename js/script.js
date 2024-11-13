let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-item");
    slideIndex += step;

    // Memastikan slideIndex tetap berada dalam rentang yang valid
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Kembali ke slide pertama
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Kembali ke slide terakhir
    }

    // Menggeser tampilan carousel
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}
