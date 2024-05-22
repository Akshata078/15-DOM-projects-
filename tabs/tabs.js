let buttons = document.querySelectorAll(".btn");
let articles = document.querySelectorAll(".content");
let about = document.querySelector(".article");

about.addEventListener("click",(e)=>{
    let id = e.target.dataset.id;

    buttons.forEach((btn)=>{
        btn.classList.remove("active");
    })
    e.target.classList.add("active");


    articles.forEach((article)=>{
        article.classList.remove("active");
    })
    let ele = document.querySelector(`.${id}`);
    if (ele){
    ele.classList.add("active");
    }
    })

