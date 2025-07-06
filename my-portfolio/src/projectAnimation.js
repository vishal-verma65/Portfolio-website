import { gsap } from "gsap";
import  { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const projectAnimation = ()=>{
    const tl = gsap.timeline({ease:"power3.out"});
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