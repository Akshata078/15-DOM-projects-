let count = 0;
let value = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn)=>{
btn.addEventListener("click",(event)=>{
     let style = event.currentTarget.classList;
     if(style.contains("decrease")){
        count--;
     }
     else if(style.contains("increase")){
        count++;
     }
     else{
        count = 0;
     }
     value.textContent = count;

     if(count>0){
        value.style.color ="green";
     }
     if(count<0){
        value.style.color ="red";
     }
     if(count==0){
        value.style.color ="black";
     }
})
})
