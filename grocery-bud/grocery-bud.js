let submitBtn = document.querySelector(".btn");
let input = document.querySelector(".input");
let errorMsg = document.querySelector(".error-msg");
let list = document.querySelector(".list");

let editflag = false;

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(input.value == ""){
        alert("Please Enter Value");
        
    }
    else if(!editflag){
        list.innerHTML += 
    ` 
    <ul>
        <li>${input.value}</li>
        <div class="button-container">
            <button class="edit">e</button>
            <button class="delete">d</button>
        </div>
    </ul>
    `
    // input.value = "";
    setBackToDefault();
    }
    else{
        let edit = document.querySelector(".edit");
        edit.parentElement.previousElementSibling.textContent = input.value;
        setBackToDefault();
    }


    let editBtns = document.querySelectorAll(".edit");
    editBtns.forEach(editBtn => {
        editBtn.addEventListener("click", editItem);
    });
})



function setBackToDefault(){
    input.value = "";
    submitBtn.textContent = "Submit";
    editflag=false;
}

function alert(text){
    errorMsg.textContent = text;
    errorMsg.style.backgroundColor= "rgb(253, 175, 175)";

    setTimeout(()=>{
        errorMsg.textContent = "";
        errorMsg.style.backgroundColor= "";
    },2000);
}



let deleteBtn = document.querySelector(".delete");

function deleteItem(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove(); 
    }
}
list.addEventListener("click",deleteItem);



function editItem(e) {
    let editBtn = e.target;
    let edit = editBtn.parentElement.previousElementSibling;
    input.value = edit.textContent;
    submitBtn.textContent = "Edit";
    editflag = true;
}