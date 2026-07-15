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

function toggleGene() {
    
}


// =============================
// GENE EXPRESSION DIAGRAM
// =============================

function geneExpressionDiagram(state) {
    const isOn = state === "on";
    const title = isOn ? "Gene Turned On" : "Gene Turned Off";
    const activity = isOn ? "More mRNA and proteins" : "Less mRNA and proteins";
    const inactiveGradient = isOn ? "" : `
        <defs>
            <linearGradient id="inactiveStrand" x1="80" y1="0" x2="440" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#7dd3fc"/>
                <stop offset="35%" stop-color="#7dd3fc"/>
                <stop offset="40%" stop-color="#64748b"/>
                <stop offset="60%" stop-color="#64748b"/>
                <stop offset="65%" stop-color="#7dd3fc"/>
                <stop offset="100%" stop-color="#7dd3fc"/>
            </linearGradient>
        </defs>`;
    const strand = isOn ? "#7dd3fc" : "url(#inactiveStrand)";
    const rungs = "#e0f2fe";
    const particles = isOn
        ? '<circle cx="630" cy="120" r="16"/><circle cx="700" cy="150" r="16"/><circle cx="770" cy="120" r="16"/><circle cx="660" cy="205" r="16"/><circle cx="735" cy="220" r="16"/><circle cx="805" cy="190" r="16"/>'
        : '<circle cx="680" cy="160" r="16"/><circle cx="755" cy="205" r="16"/>';
    const particleColor = isOn ? "#4ade80" : "#94a3b8";

    return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 340">
            <rect width="900" height="340" rx="24" fill="#10283b"/>
            ${inactiveGradient}
            <text x="450" y="62" text-anchor="middle" fill="#FA9D00" font-family="Arial, sans-serif" font-size="34" font-weight="bold">${title}</text>
            <path d="M80 150 C140 85 200 215 260 150 S380 85 440 150" fill="none" stroke="${strand}" stroke-width="12" stroke-linecap="round"/>
            <path d="M80 190 C140 255 200 125 260 190 S380 255 440 190" fill="none" stroke="${strand}" stroke-width="12" stroke-linecap="round"/>
            <g stroke="${rungs}" stroke-width="7" stroke-linecap="round"><line x1="92" y1="157" x2="92" y2="183"/><line x1="125" y1="124" x2="125" y2="216"/><line x1="160" y1="116" x2="160" y2="224"/><line x1="195" y1="138" x2="195" y2="202"/><line x1="230" y1="174" x2="230" y2="166"/><line x1="265" y1="189" x2="265" y2="151"/><line x1="300" y1="166" x2="300" y2="174"/><line x1="335" y1="130" x2="335" y2="210"/><line x1="370" y1="116" x2="370" y2="224"/><line x1="405" y1="132" x2="405" y2="208"/></g>
            <text x="260" y="280" text-anchor="middle" fill="#dbeafe" font-family="Arial, sans-serif" font-size="24">${isOn ? "DNA is active" : "Part of DNA is inactive"}</text>
            <path d="M485 170 H550" stroke="#FA9D00" stroke-width="10" stroke-linecap="round"/><path d="M540 150 L570 170 L540 190" fill="none" stroke="#FA9D00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
            <g fill="${particleColor}">${particles}</g>
            <text x="700" y="280" text-anchor="middle" fill="#dbeafe" font-family="Arial, sans-serif" font-size="24">${activity}</text>
        </svg>` )}`;
}

function openGeneInfo(state) {

    const image = document.getElementById("geneExpressionImage");

    if (!image || !["on", "off"].includes(state)) {
        return;
    }

    image.src = geneExpressionDiagram(state);
    image.alt = `Diagram showing a gene turned ${state}`;

    document.querySelectorAll(".expression-card").forEach(card => {
        card.classList.toggle("selected", card.textContent.includes(`Gene Turned ${state === "on" ? "On" : "Off"}`));
    });

}


openGeneInfo("on");


// =============================
// MICROARRAY STEP SELECTOR
// =============================

const microarrayInfo = {
    samples: {
        title: "Collect biological samples",
        text: "Scientists collect the biological samples they want to compare, such as healthy colon tissue and colon tumor tissue. Each sample represents one condition, so the later analysis can compare gene activity between groups.",
        image: "images/1.png",
        imageAlt: "Illustration of collecting biological samples"
    },
    rna: {
        title: "Extract RNA",
        text: "mRNA is extracted from each sample because it reflects which genes were active in the cells. A gene that produces more mRNA is generally considered to have higher expression.",
        image: "images/2.png",
        imageAlt: "Illustration of extracting RNA"
    },
    prep: {
        title: "Convert the RNA into cDNA",
        text: "RNA is unstable and can break down easily, so it is converted into a more stable DNA copy called complementary DNA, or cDNA. This cDNA represents the original mRNA population from the sample.",
        image: "images/3.png",
        imageAlt: "Illustration of preparing labeled material"
    },
    hybridize: {
        title: "Add Labels",
        text: "The cDNA is tagged with a fluorescent or chemical label so it can be detected. The label allows scientists to measure where the sample binds on the microarray chip.",
        image: "images/4.png",
        imageAlt: "Illustration of hybridizing labeled material to DNA probes"
    },
    scan: {
        title: "Hybridize to DNA probes",
        text: "The labeled cDNA is placed onto a microarray chip containing thousands of known DNA probes. Through hybridization, matching sequences bind together, so each probe can detect the expression of a specific gene or probe set.",
        image: "images/5.png",
        imageAlt: "Illustration of scanning signal intensity"
    },
    analysis: {
        title: "Scan and Analyze expression data",
        text: "A scanner measures the signal intensity at each probe location, producing numerical gene-expression data. These data are then normalized and analyzed using differential gene-expression analysis to identify genes that are more or less expressed in tumor tissue compared with healthy tissue.",
        image: "images/6.png",
        imageAlt: "Illustration of analyzing expression data"
    }
};

function selectMicroarrayStep(step) {
    const selectedStep = microarrayInfo[step];
    const title = document.getElementById("micro-step-title");
    const text = document.getElementById("micro-step-text");
    const image = document.getElementById("micro-step-image");

    if (!selectedStep || !title || !text || !image) {
        return;
    }

    document.querySelectorAll(".microarray-step").forEach(button => {
        const isActive = button.dataset.step === step;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });

    title.innerText = selectedStep.title;
    text.innerText = selectedStep.text;
    image.src = selectedStep.image;
    image.alt = selectedStep.imageAlt;
}

document.querySelectorAll(".microarray-step").forEach(button => {
    button.addEventListener("click", () => selectMicroarrayStep(button.dataset.step));
});
