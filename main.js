let boutonAjouter = document.querySelector("#ajouter");
let taches = document.querySelector("ul")
let body = document.querySelector("body")

taches.addEventListener("change",(event)=>{

    if (event.target.type == "checkbox") {
        if (event.target.checked){
            event.target.parentNode.classList.add("barre")
        } else {
            event.target.parentNode.classList.remove("barre")
        }
    }



})
boutonAjouter.addEventListener("click",() =>{

    let textUser = document.getElementById("input");
    
    let nouvelleTache = document.createElement("li");
    

    nouvelleTache.innerHTML= `        
        <input type = "checkbox" name = "check" class = "check">
        <p>${textUser.value}</p>
        <input type = "image" src = "Logo/trash.png" class = "trash">
        `;
    textUser.value = ""

    let trash = nouvelleTache.childNodes[5];
    
    trash.addEventListener("click",(event)=>{
                 trash.parentNode.remove();
            });

    taches.appendChild(nouvelleTache);
  
});