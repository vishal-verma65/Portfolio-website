import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );

export const otherAnimation = ()=>{

    //bottom corner rotating circle animation
    let rotation = 0;
    window.addEventListener("wheel", (event)=>{
        const direction = event.deltaY > 0 ? 1 : -1;

        rotation += 5 * direction;

        gsap.to(".scroll-img",{
            rotation: rotation,
            duration: 1,
            ease: "power3.out",
        });
    });

    gsap.to(".inner-circle",{
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: ".inner-circle",
            scroller: "body",
            start: "top 90%",
            end: "+=1400%",
            scrub: true,
        }
    });
    

    // gsap.to(".navbar",{
    //     backgroundColor: "transparent",
    //     y: -100, 
    //     opacity: 0,
    //     duration: 0.5,
    //     scrollTrigger:{
    //         trigger:".collaborate-section",

    // })

    // ScrollTrigger.create({
    //     trigger: ".contact-section",
    //     start: "top top",  
    //     onEnter: () => {
    //         gsap.to(".navbar-section", {
    //             backgroundColor: "transparent",
    //             y: -100, 
    //             opacity: 0,
    //             duration: 0.5,
    //         });
    //     },
    //     onLeaveBack: () => {
    //         gsap.to(".navbar-section", {
    //             backgroundColor: "#071E22",
    //             y: 0, 
    //             opacity: 1,
    //             duration: 0.5,
    //         });
    //     }
    //     });


};