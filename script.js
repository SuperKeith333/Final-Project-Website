// =============================
// PAGE FADE IN
// =============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});




// =============================
// MENU SYSTEM
// =============================


const menu = document.getElementById("menu");

const openButton =
document.getElementById("menuButton");

const closeButton =
document.getElementById("closeMenu");



if(openButton && menu){

    openButton.addEventListener(
        "click",
        () => {

            menu.classList.add("open");

        }
    );

}



if(closeButton && menu){

    closeButton.addEventListener(
        "click",
        () => {

            menu.classList.remove("open");

        }
    );

}



// Close menu when clicking a link

if(menu){

    const links =
    menu.querySelectorAll("a");


    links.forEach(link => {


        link.addEventListener(
            "click",
            () => {

                menu.classList.remove("open");

            }
        );


    });

}








// =============================
// SCROLL REVEAL
// =============================


const revealElements =
document.querySelectorAll(".reveal");



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


        observer.unobserve(
            entry.target
        );


    }



});


},


{

threshold:0.15


}

);





revealElements.forEach(
    element=>{

        observer.observe(element);

    }
);







// =============================
// STAGGER ANIMATIONS
// =============================


const groups = [

".stats .reveal",

".cards .reveal",

".gene-flow .reveal",

".pipeline .reveal"


];



groups.forEach(selector=>{


const items =
document.querySelectorAll(selector);



items.forEach((item,index)=>{


item.style.transitionDelay =

`${index * 0.15}s`;



});


});
