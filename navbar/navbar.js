let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

// navToggle.addEventListener("click",()=>{
//     links.classList.toggle("show-links");
// })


let linksVisible = false;

navToggle.addEventListener("click", () => {
    if (!linksVisible) {
        links.style.height = "10rem"; 
    } else {
        links.style.height = "0"; 
    }
    linksVisible = !linksVisible; 
});