let images = document.querySelectorAll(".images");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let count = 0;

images.forEach((image, index) => {
    image.style.left = `${index * 100}%`; 
});

nextBtn.addEventListener("click", () => {
    if (count < images.length - 1) {
        count++;
        btnHideDisplay();
        slideImages();
    }
});

prevBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        btnHideDisplay();
        slideImages();
    }
});

function slideImages() {
    images.forEach((image, index) => {
        image.style.transform = `translateX(-${count * 100}%)`;
    });
}

function btnHideDisplay() {
    if (count < images.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }

    if (count > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none"; 
    }
}
