const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".Btn");

function shownotes() {
    notescontainer.innerHTML=localStorage.getItem("notes")
    
}
shownotes()

function updateStorage() {
    localStorage.setItem("notes",notescontainer.innerHTML)
    
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-box"; // fixed class name
    inputBox.setAttribute("contenteditable", "true");
    
    img.src = "image3.png"; // replace with an actual icon path
    img.alt = "Delete";

    inputBox.appendChild(img);
    notescontainer.appendChild(inputBox);
});
notescontainer.addEventListener("click",function (e) {
    if(e.target.tagName==="IMG"){
            e.target.parentElement.remove()
            updateStorage()
    
    }
    else if(e.target.tagName==="p"){
        notes=document.querySelectorAll("input-box")
        notes.forEach(nt => {
            nt.onkeyup=function () {
                updateStorage()
                
            }
            
        });
    }
    
})
document.addEventListener("keydown",event=>{
    if (event.key===Enter) {
        document.execCommand("insertLineBreak")
        event.preventDefault()
        
    }
})
