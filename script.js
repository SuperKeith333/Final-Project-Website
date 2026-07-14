// ==============================
// SMOOTH SCROLLING
// ==============================


function scrollToSection(id) {

    const target =
    document.getElementById(id).offsetTop;


    const start =
    window.scrollY;


    const distance =
    target - start;


    const duration = 1500;


    let startTime = null;



    function animation(currentTime) {


        if (!startTime)
            startTime = currentTime;



        const elapsed =
        currentTime - startTime;



        let progress =
        Math.min(elapsed / duration, 1);



        // ease-in-out function

        progress =
        progress < 0.5

        ? 2 * progress * progress

        : 1 - Math.pow(-2 * progress + 2, 2) / 2;



        window.scrollTo(

            0,

            start + distance * progress

        );



        if (elapsed < duration)

            requestAnimationFrame(animation);


    }



    requestAnimationFrame(animation);

}






// ==============================
// PROGRESS BAR
// ==============================


window.addEventListener(

"scroll",

() => {


    const scrollTop =
    document.documentElement.scrollTop;



    const height =

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;



    const progress =

    (scrollTop / height) * 100;



    document.getElementById(
        "progress-bar"
    ).style.width =
    progress + "%";


}

);







// ==============================
// REVEAL ANIMATION
// ==============================


document.addEventListener(

"DOMContentLoaded",

() => {



const elements =

document.querySelectorAll(".reveal");



console.log(

"Reveal elements found:",

elements.length

);





const observer =

new IntersectionObserver(


(entries) => {



entries.forEach(

(entry) => {



if(entry.isIntersecting){



entry.target.classList.add(
    "show"
);



observer.unobserve(
    entry.target
);



}



}

);



},



{

threshold:0.15

}



);





elements.forEach(

(element) => {


observer.observe(element);


}

);



}

);







// ==============================
// STAGGER ANIMATIONS
// ==============================


const groups = [

".stats .reveal",

".card-grid .reveal",

".gene-flow .reveal",

".pipeline .reveal",

".flowchart .reveal"

];



groups.forEach(

(selector) => {



const items =

document.querySelectorAll(selector);



items.forEach(

(item,index)=>{


item.style.transitionDelay =

`${index * 0.15}s`;



}

);



}

);