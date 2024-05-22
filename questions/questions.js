

let questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    let btn = question.querySelector(".question-btn");

    btn.addEventListener("click",()=>{
        question.classList.toggle("show-text");
    })
})