document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.querySelector("header button");
    const nav = document.querySelector("header nav");
    const iframe = window.parent.document.getElementById("header");

    /* let i = 0 */
    const navSlide = () => {
        /* nav.classList.add("slide")

        if (i == 0) {
        iframe.classList.   add("slide");
        navBtn.textContent = "close";
        i++;

        }
        else {
            navHide ();
        }; */

        if (iframe.classList.contains("slide")) {
            iframe.classList.remove("slide");
            navBtn.textContent = "menu";
            
        } else {
            iframe.classList.add("slide");
            navBtn.textContent = "close";
            
        }
    };

    /* const navHide = () => {
        //nav.classList.add("slide")

        iframe.classList.remove("slide");
        navBtn.textContent = "menu";
        i = 0;
    }; */
    
    navBtn.addEventListener("click", navSlide);
    /* navBtn.addEventListener("click", navHide); */


});//////////////////끝