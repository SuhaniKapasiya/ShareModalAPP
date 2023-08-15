const model =document.querySelector(".modal");
const overlay=document.querySelector(".overlay");


//Modal open function

const openModal=()=>{
    console.log("Modal is open");
    model.classList.add("active");
    overlay.classList.add("overlayactive");
}
//Modal close function

const closeModal=()=>{
    model.classList.remove("active");
    overlay.classList.remove("overlayactive");
}
