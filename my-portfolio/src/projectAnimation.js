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
// const floatingImg = document.querySelector(".main-floating .projectImg");
// //  console.log(floatingImg.getAttribute("src"));
// const floatingCategory = document.querySelector(".main-floating .category");
// const floatingDesc = document.querySelector(".main-floating .desc");

// const projects = document.querySelectorAll(".project");
// // console.log(projects);
// projects.forEach(project => {
//     // console.log(project);
//     const floatingDiv = project.querySelector(".floatingDiv");

//     project.addEventListener("mouseenter", (e) => {
//         floatingDiv.style.display = "block";

//         const imageSrc = document.querySelector(".floatingDiv .projectImg")
//         const category = document.querySelector(".floatingDiv .category")
//         const desc = document.querySelector(".floatingDiv .desc")

//         const img = imageSrc.getAttribute("src");
//         floatingImg.setAttribute("src", img);
//         floatingCategory.textContent = category.textContent;
//         floatingDesc.textContent = desc.textContent;

//         console.log(img);
//         // console.log(imageSrc.getAttribute("src"));
//         // console.log(category.textContent);
//         // console.log(desc.textContent);
//     });

//     project.addEventListener("mousemove", (e) => {
//         const rect = project.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         gsap.to(floatingDiv, {
//         left: x,
//         top: y,
//         duration: 0.5,
//         ease: "power3.out",
//         });
//     });

//     project.addEventListener("mouseleave", () => {
//         floatingDiv.style.display = "none";
//     });
// });

        
};
