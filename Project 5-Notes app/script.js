let createButton = document.querySelector(".container button");
let notesContainer = document.querySelector(".notes-container");

createButton.addEventListener("click", () => {
    let p = document.createElement("p");
    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.alt = "Delete Note";
    img.className = "delete-icon";

    p.setAttribute("contenteditable", "true");
    p.className = "input-box";
    
    p.appendChild(img);  
    notesContainer.appendChild(p); 

    updateStorage();  
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); 
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box")
        notes.forEach(note => {
            note.onkeyup=function(){
                updateStorage()
            }
        });
    }

});

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);  
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");

}

showNotes();