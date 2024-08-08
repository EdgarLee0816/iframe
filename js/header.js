document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.querySelector("header button");
    const nav = document.querySelector("header nav");
    const iframe = window.parent.document.getElementById("header");


    const navSlide = () => {
        //nav.classList.add("slide")

        iframe.classList.add("slide");
        

    };
    
    navBtn.addEventListener("click", navSlide);


});//////////////////끝