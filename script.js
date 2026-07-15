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

// window.addEventListener("scroll", () => {

//     const scroll =
//         window.scrollY /
//         window.innerHeight;

//     if (scroll > 1) {
//         document.querySelector(".about-colon")
//             .style.opacity = "0";

//         document.querySelector(".symptoms")
//             .style.opacity = "1";
//     }

// });

const info = {

    samples: {
        title: "Collect Samples",
        text: "Healthy and cancerous tissue samples are collected so their gene activity can be compared."
    },

    rna: {
        title: "Extract RNA",
        text: "RNA is extracted from the cells because it contains information about which genes are active."
    },

    cdna: {
        title: "Convert RNA into cDNA",
        text: "RNA is converted into more stable complementary DNA (cDNA) that can be measured by the microarray."
    },

    labels: {
        title: "Add Labels",
        text: "Fluorescent labels are attached to cDNA so the microarray scanner can detect gene activity."
    },

    chip: {
        title: "Bind cDNA to Microarray Chip",
        text: "The labeled cDNA attaches to matching probes on the microarray chip."
    },

    analysis: {
        title: "Analyze Expression Data",
        text: "The fluorescence signals are analyzed to determine which genes are more or less active."
    }

};


function openInfo(step){

    document.getElementById("infoTitle").innerText =
        info[step].title;

    document.getElementById("infoText").innerText =
        info[step].text;


    document.getElementById("infoOverlay")
        .style.display = "flex";

}


function closeInfo(){

    document.getElementById("infoOverlay")
        .style.display = "none";

}