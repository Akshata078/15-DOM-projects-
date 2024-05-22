const colors = ["red","green","yellow","pink","orange","purple","blue","darkpink"];
let color = document.querySelector(".color");
let btn = document.querySelector("#btn");

function getRandomN(){
    let randomNum = Math.floor(Math.random()*colors.length);
    return randomNum;
}

btn.addEventListener("click",()=>{
    let randomNumber = getRandomN();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})