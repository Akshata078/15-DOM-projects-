let modalBtn = document.querySelector(".modal-btn");
let closeBtn = document.querySelector(".close-btn");
let modal = document.querySelector(".modal-overlay"); //background: rgba(73, 166, 233, 0.5);

modalBtn.addEventListener("click",()=>{
    modal.classList.add("open-modal");
    modal.style.background = " rgba(73, 166, 233, 0.5)";
})

closeBtn.addEventListener("click",()=>{
    modal.classList.remove("open-modal");
    modal.style.background = "";
})