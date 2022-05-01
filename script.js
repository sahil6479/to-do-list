const mainDiv  = document.getElementById("main");
let item = document.getElementsByClassName("item")
const submitBtn = document.getElementById("submit");
const inputBtn = document.getElementById("input");
let remove = document.getElementsByClassName("remove");
let done = document.getElementsByClassName("done");

let num = 0;


function createItemDiv(text){
    ++num;
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    let itemTextDiv = document.createElement("div");
    itemTextDiv.classList.add("item-text");
    let itemTextDivText = document.createTextNode(text)
    itemTextDiv.appendChild(itemTextDivText)
    itemDiv.appendChild(itemTextDiv)

    let itemBtnDiv = document.createElement("div");
    itemBtnDiv.classList.add("item-btn");
    let doneBtn = document.createElement("button");
    doneBtn.classList.add("btn","done");
    let doneBtnText = document.createTextNode("Done  ✔")
    doneBtn.appendChild(doneBtnText);
    doneBtn.addEventListener("click", function(){
        doneBtn.parentElement.previousElementSibling.classList.add("linethrough");
    })
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("btn","remove");
    let removeBtnText = document.createTextNode("Remove");
    removeBtn.appendChild(removeBtnText);
    removeBtn.addEventListener("click", function(){
        removeBtn.parentElement.parentElement.remove();
    })
    itemBtnDiv.appendChild(doneBtn);
    itemBtnDiv.appendChild(removeBtn);
    itemDiv.appendChild(itemBtnDiv);
    mainDiv.appendChild(itemDiv);
}




submitBtn.addEventListener("click",submit);
function submit(e){
    e.preventDefault();
    let value = input.value;
    if(value != ""){
        createItemDiv(value);
        input.value = "";
    }
}