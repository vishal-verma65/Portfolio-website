import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrambleTextPlugin, SplitText);



export const heroAnimation = ()=> {

    //animation of hii para in the hero section
    gsap.to(".hii-para",{
        duration: 2,
        ease: "none",
        scrambleText: {
            text: "Hii, I am a",
            chars: "XOXO",
            speed: .2,
        }
    });

    //animation of the hero para in hero section
    gsap.from(".hero-para-container",{
        delay: 3,
        duration: 1,
        y: 50,
        ease: "power3.in",
        opacity: 0,
    });

    //timeline animation of the word frontend developer
    const tl = gsap.timeline();
    let split  = SplitText.create(".line", {type: "chars"});

    //front end word animation
    tl.from(split.chars[0], {
        rotateX: -180,
        rotateZ: 0,
        duration: .8,
        y: 100,
        autoAlpha: -1,
    })
    .from(split.chars[1], {
        duration: .3,
        x: 100,
        autoAlpha: -1, 
    })
    .from(split.chars[2], {
        duration: .8,
        x: 500,
        autoAlpha: -1,   
    })
    .from(split.chars[3], {
        duration: .8,
        y: -100, 
        }, "<")
    .from(split.chars[4], {
        duration: .8,
        scale: -3,
        autoAlpha: -1, 
    })
    .from(split.chars[5], {
        duration: .3,
        x: 200,
        autoAlpha: -1,    
    })
    .from(split.chars[6], {
        duration: 1,
        y: -100,
        autoAlpha: -1,
        ease: "bounce.in"       
    }, 1)
    .from(split.chars[7], {
        duration: .8,
        x: 400,
        y: 400,
        ease: "power1.inOut",
        autoAlpha: -1,  
    },2)
    .from(split.chars[8], {
        y: -100,
        duration: 1,
        rotateZ: 90, 
        ease: "bounce.out"    
    })

    //developer word animation
    .from(split.chars[9], {
        duration: .8,
        y: 100,
        autoAlpha: -1,
    },1.5)
    .from(split.chars[10], {
        duration: .8,
        y: -100,
        autoAlpha: -1,
    },"<")
    .from(split.chars[11], {
        duration: .5,
        y: -100,
        autoAlpha: -1,
    },2)
    .from(split.chars[12], {
        duration: .8,
        y: -100,
        autoAlpha: -1,
    },3)
    .from(split.chars[13], {
        duration: .8,
        y: 100,
        autoAlpha: -1,
    },3)
    .from(split.chars[14], {
        duration: .8,
        x: -200,
        autoAlpha: -1,
    },2)
    .from(split.chars[15], {
        y: -100,
        duration: 1,
        rotateZ: 90, 
        ease: "bounce"    
    },2)
    .from(split.chars[16], {
        duration: .8,
        x: 200,
        autoAlpha: -1,
    },2.5)
    .from(split.chars[17], {
        duration: .8,
        y: -100,
        autoAlpha: -1,
    },2.3)
    .from(".hero-bg-flower", {
        duration: 2,
        x: -700,
        rotate: 360,
        autoAlpha: 0,
    },2.3)
    .to(".hero-bg-flower", {
        duration: 2,
        rotate: 360,
        repeat: -1,
        transformOrigin: "51% 48%",
    },4.3)
    .from(".hero-bg-ribbon", {
        duration: .5,
        opacity:0,
    },4.3)
    .from(".hero-bg-ribbon-d", {
        duration: .5,
        rotateY: 360,
        opacity:0,
    },4.3)
    .to(".hero-bg-ribbon-d", {
        duration: 2,
        rotateY: 30,
        rotateZ: 10,
        transformOrigin: "top center",
        ease: "elastic.inOut",
        repeat: -1,
        yoyo: true,
    },5)
    .to(split.chars[13], {
        duration: 5,
        ease: "bounce.inOut",
        rotateX: 360,
        repeat: -1,
    },5)

};
