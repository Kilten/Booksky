// selecting popup-overlay, popup-box, add-button
let popupOverlay = document.getElementById("popup-overlay");
let popupBox = document.getElementById("popup-box");
let addIcon = document.getElementById("icon");

addIcon.addEventListener("click" , function(){
    popupOverlay.style.display = "block"
    popupBox.style.display = "block"
})

// selecting cancel-button
let cancelPopup = document.getElementById("cancel-popup");

cancelPopup.addEventListener("click" , function(event){
    event.preventDefault();
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"

    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
})

// selecting add-book-button, book-title-input, book-author-input, book-description-input,container
let addbookButton = document.getElementById("add-book-button");
let bookTitleInput = document.getElementById("book-title-input");
let bookAuthorInput = document.getElementById("book-author-input");
let bookDescriptionInput = document.getElementById("book-description-input");
let container = document.getElementById("container");

addbookButton.addEventListener("click" , function(event){
    event.preventDefault();

        if(bookTitleInput.value === "" || 
       bookAuthorInput.value === "" ||
       bookDescriptionInput.value === ""){
        
        alert("Please fill the Book Details")
        return;
    }

    let div = document.createElement("div");
    div.setAttribute("id" , "book-details");

    div.innerHTML = `        
        <h2>${bookTitleInput.value}</h2>
        <h5>${bookAuthorInput.value}</h5>
        <p>${bookDescriptionInput.value}</p>
        <button onclick="deletebook(event)">Delete</button>`

    container.append(div);
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"

    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";

})

function deletebook(event){
    event.target.parentElement.remove();
}