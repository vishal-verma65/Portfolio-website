import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = ()=>{

    gsap.to(".about-section .about-main-wrapper",{
        transform: "translate(-72.5%)",
        scrollTrigger: {
            trigger: ".about-section",
            scroller: "body",
            start: "top top",
            end: "+=500%",
            scrub: 2,
            pin: true,
        }
    });

    gsap.to(".about-flower img",{
        rotate: 360, 
        scrollTrigger: {
            trigger: ".about-section",
            scrub: true,
            start: "top top",
            end: "100%",
        }
    });

    gsap.from(".tech-stack-flower img", {
        rotate: 360, 
        x: -900,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: ".about-section",
            scrub: 3,
            start: "top top",
            end: "100%",
        }
    });
    
    gsap.to(".stack-flower img", {
        rotate: "360", 
        x: 920,
        repeat: 0,
        scrollTrigger: {
            trigger: ".about-section",
            scroller: "body",
            scrub: 3,
            start: "top top",
            end: "300%",
            }
        }); 
        
    gsap.from(".earth-clip img", {
        rotate: "360", 
        x: -950,
        y: 400,
        repeat: 0,
        scrollTrigger: {
            trigger: ".about-section",
            scroller: "body",
            scrub: 3,
            start: "top top",
            end: "500%",
            }
        });       
};