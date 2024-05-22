let sidebarToggle = document.querySelector(".sidebar-toggle");
let sidebarClose = document.querySelector(".close-btn");
let sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click",()=>{
    sidebar.classList.toggle("show-sidebar");
})

sidebarClose.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar");
})