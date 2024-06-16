
const modal = document.querySelector('.shareModal');
const overlay = document.querySelector(".overlay");

function OpenModal(){
    modal.classList.add('active');
    overlay.classList.add("overlayactive");

}

function CloseModal(){
    modal.classList.remove('active');
    overlay.classList.remove("overlayactive");

}