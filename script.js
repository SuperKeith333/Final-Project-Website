const sections =
document.querySelectorAll(".card");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


});


sections.forEach(section=>{

observer.observe(section);

});

function scrollToSection(id){

    const target =
    document.getElementById(id).offsetTop;


    const start =
    window.scrollY;


    const distance =
    target - start;


    let startTime = null;


    function animation(currentTime){

        if(startTime === null)
            startTime=currentTime;


        const progress =
        Math.min(
            (currentTime-startTime)/1000,
            1
        );


        window.scrollTo(
            0,
            start + distance * ease(progress)
        );


        if(progress < 1)
            requestAnimationFrame(animation);

    }


    requestAnimationFrame(animation);

}



function ease(t){

    return t<0.5
    ? 2*t*t
    : 1-Math.pow(-2*t+2,2)/2;

}

window.addEventListener(
"scroll",
()=>{


let scrollTop =
document.documentElement.scrollTop;


let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress =
(scrollTop/height)*100;


document.getElementById(
"progress-bar"
).style.width =
progress+"%";


});

document.addEventListener("DOMContentLoaded", () => {


    const elements =
        document.querySelectorAll(".reveal");


    console.log(
        "Found reveal elements:",
        elements.length
    );


    const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(entry => {


                    if(entry.isIntersecting){


                        entry.target.classList.add("show");


                        // optional:
                        observer.unobserve(entry.target);


                    }


                });


            },
            {
                threshold: 0.15
            }
        );



    elements.forEach(element => {

        observer.observe(element);

    });


});