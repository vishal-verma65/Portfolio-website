import { gsap } from "gsap";
import  { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const projectAnimation = ()=>{

    //timeline animation to the project section
    const tl = gsap.timeline({ease:"power3.out"});

    //animation of the project heading 
    tl.from(".project-heading",{
        y:50,
        autoAlpha: -1,
        duration: 1,
        scrollTrigger: {
            trigger: ".project-heading",
            scrub: 2,
            start: "top 100%",
            end: "top 60%",
        }
    })
    //stagger animation to all the projects in the project section
    .from(".project",{
        y:50,
        autoAlpha: -1,
        duration: 1,
        stagger: .5,
        scrollTrigger: {
            trigger: ".project",
            scrub: 2,
            start: "top 100%",
            end: "top 60%",
        }
    }) 

const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    const floatingDiv = project.querySelector(".floatingDiv");

    //setting up the style property of the div to display block and adding the content to it when the mouse enters the particular project
    project.addEventListener("mouseenter", () => {

        document.querySelector(".floating-div").style.display = "block";

        const floatingImg = document.querySelector(".floating-div .project-img");
        const floatingCategory = document.querySelector(".floating-div .floating-category");
        const floatingDesc = document.querySelector(".floating-div .floating-desc");

        const imageSrc = project.querySelector(".floatingDiv .projectImg")
        const category = project.querySelector(".floatingDiv .category")
        const desc = project.querySelector(".floatingDiv .desc")

        const img = imageSrc.getAttribute("src");
        floatingImg.setAttribute("src", img);
        floatingCategory.textContent = category.textContent;
        floatingDesc.textContent = desc.textContent;

    });

    //making the div to follow the cursor movement 
    project.addEventListener("mousemove", (e) => {

        //finding the cursor pointer value initialized from 0 in respect to the separate project container
        const rect = project.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(".floating-div", {
        left: x,
        top: y,
        duration: 0.5,
        ease: "power3.out",
        });
    });

    //disappearing the div as soon as the mouse leaves the project
    project.addEventListener("mouseleave", () => {
        document.querySelector(".floating-div").style.display = "none";
    });
});      
};
