
let play = document.querySelector(".play-btn");
let pause = document.querySelector(".pause-btn");
let video = document.querySelector(".video");

play.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    }
});

pause.addEventListener("click", () => {
    if (video.played) {
        video.pause();
    }
});



