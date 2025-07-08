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
};