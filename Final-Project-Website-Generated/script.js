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

const microarrayInfo = {
    samples: {
        title: "Collect biological samples",
        text: "Healthy and tumor tissue samples are collected so their gene activity can be compared."
    },
    rna: {
        title: "Extract RNA",
        text: "RNA is extracted from the cells because it contains information about which genes are active."
    },
    prep: {
        title: "Prepare labeled material",
        text: "RNA is converted or processed into a stable labeled form that can bind to the microarray probes."
    },
    hybridize: {
        title: "Hybridize to DNA probes",
        text: "The labeled material binds to matching probes on the microarray chip, producing a measurable signal."
    },
    scan: {
        title: "Scan signal intensity",
        text: "The microarray is scanned and the intensity of each probe is recorded as an estimate of RNA abundance."
    },
    analysis: {
        title: "Analyze expression data",
        text: "The numerical data are compared between healthy and tumor samples to find genes with higher or lower expression in cancer."
    }
};

const geneStages = {
    dna: {
        title: "DNA",
        text: "Genes are sections of DNA that contain instructions for producing functional RNA or proteins."
    },
    transcription: {
        title: "Transcription",
        text: "When a gene is expressed, its DNA sequence is copied into messenger RNA (mRNA)."
    },
    mrna: {
        title: "mRNA",
        text: "mRNA carries the gene's instructions from the nucleus to the cell machinery that makes protein."
    },
    translation: {
        title: "Translation",
        text: "The sequence in mRNA is translated into a protein, which carries out functions inside the cell."
    },
    protein: {
        title: "Protein",
        text: "Proteins are functional molecules that determine how cells behave and respond to their environment."
    },
    behavior: {
        title: "Cell Behavior",
        text: "Changes in protein levels can affect cell growth, survival, and interactions with other cells."
    }
};

function selectPanel(panelId) {
    const tabs = document.querySelectorAll('.panel-tab');
    const panes = document.querySelectorAll('.panel-pane');

    tabs.forEach(tab => {
        const isActive = tab.dataset.panel === panelId;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    panes.forEach(pane => {
        const isActive = pane.id === `panel-${panelId}`;
        pane.classList.toggle('active', isActive);
        pane.hidden = !isActive;
    });
}

function selectGeneStage(stage) {
    const stageButtons = document.querySelectorAll('.stage-card');
    stageButtons.forEach(button => {
        const isActive = button.dataset.stage === stage;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    const title = document.getElementById('stageTitle');
    const text = document.getElementById('stageText');

    if (geneStages[stage]) {
        title.innerText = geneStages[stage].title;
        text.innerText = geneStages[stage].text;
    }
}

function updateExpressionLevel(value) {
    const mrnaBar = document.getElementById('mrnaBar');
    const proteinBar = document.getElementById('proteinBar');
    const mrnaValue = document.getElementById('mrnaValue');
    const proteinValue = document.getElementById('proteinValue');

    const proteinLevel = Math.round(value * 0.75);

    mrnaBar.style.width = `${value}%`;
    proteinBar.style.width = `${proteinLevel}%`;
    mrnaValue.innerText = `${value}%`;
    proteinValue.innerText = `${proteinLevel}%`;
}

function selectMicroarrayStep(step) {
    const stepButtons = document.querySelectorAll('.microarray-step');
    stepButtons.forEach(button => {
        const isActive = button.dataset.step === step;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    const title = document.getElementById('micro-step-title');
    const text = document.getElementById('micro-step-text');

    if (microarrayInfo[step]) {
        title.innerText = microarrayInfo[step].title;
        text.innerText = microarrayInfo[step].text;
    }
}

window.addEventListener('load', () => {
    const researchPage = document.body.classList.contains('research-page');
    if (!researchPage) {
        return;
    }

    const tabs = document.querySelectorAll('.panel-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => selectPanel(tab.dataset.panel));
    });

    const stageButtons = document.querySelectorAll('.stage-card');
    stageButtons.forEach(button => {
        button.addEventListener('click', () => selectGeneStage(button.dataset.stage));
        button.addEventListener('mouseenter', () => selectGeneStage(button.dataset.stage));
    });

    const slider = document.getElementById('expressionSlider');
    if (slider) {
        slider.addEventListener('input', event => updateExpressionLevel(Number(event.target.value)));
        updateExpressionLevel(Number(slider.value));
    }

    const microSteps = document.querySelectorAll('.microarray-step');
    microSteps.forEach(button => {
        button.addEventListener('click', () => selectMicroarrayStep(button.dataset.step));
    });

    selectPanel('risk');
    selectGeneStage('dna');
    selectMicroarrayStep('samples');
});
