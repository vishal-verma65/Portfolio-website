import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = ()=>{
    if(window.innerWidth < 1024){
        const tl = gsap.timeline();

        tl.from(".about-me",{
            y: 100,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: ".about-me",
                start: "top 90%",
                end: "top 50%",
                scrub: 1,
            }
        })
        .from(".about-clip",{
            x: -300,
            rotate: -20,
            y: 50,
            scrollTrigger: {
                trigger: ".about-clip",
                start: "top 80%",
                end: "top 50%",
                scrub: 5,
            }
        }, "=")
        .from(".tech-stack",{
            y: 100,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: ".tech-stack",
                start: "top 80%",
                end: "top 45%",
                scrub: 2,
            }
        })
        .to(".tech-stack-flower",{
            x: 200,
            rotate: 360,
            scrollTrigger: {
                trigger: ".tech-stack-flower",
                start: "top 70%",
                end: "top 20%",
                scrub: 2,
            }
        }, "=")
        .from(".tools",{
            y: 100,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: ".tools",
                start: "top 80%",
                end: "top 45%",
                scrub: 2,
            }
        })
        .from(".availability",{
            y: 100,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: ".availability",
                start: "top 80%",
                end: "top 45%",
                scrub: 2,
            }
        })
        .from(".earth-clip",{
            x: 200,
            rotate: 360,
            scrollTrigger: {
                trigger: ".earth-clip",
                start: "top 60%",
                end: "top 20%",
                scrub: 3,
            }
        }, "=")

    }

    else{
    //pinning the about main wrapper 
    gsap.to(".about-section .about-main-wrapper",{
        transform: "translate(-74.5%)",
        scrollTrigger: {
            trigger: ".about-section",
            // scroller: "body",
            start: "top top",
            end: "+=500%",
            scrub: 2,
            pin: true,
        }
    });

    //about section flower rotating animation
    gsap.to(".about-flower img",{
        rotate: 360, 
        scrollTrigger: {
            trigger: ".about-section",
            scrub: true,
            start: "top top",
            end: "100%",
        }
    });

    //rotating animation of the flower above the tech stack heading 
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
    
    //rotating animation of the shape above the tech stack heading 
    gsap.to(".stack-flower img", {
        rotate: "360", 
        x: 900,
        repeat: 0,
        scrollTrigger: {
            trigger: ".about-section",
            scroller: "body",
            scrub: 3,
            start: "top top",
            end: "300%",
        }
    }); 
        
    //animation of the earth clip
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
    }           
};

