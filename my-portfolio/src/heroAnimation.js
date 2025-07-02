import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrambleTextPlugin, SplitText, ScrollTrigger);



export const heroAnimation = ()=> {

    gsap.to(".hii-para",{
        duration: 2,
        ease: "none",
        scrambleText: {
            text: "Hii, I am a",
            chars: "XOXO",
            speed: .2,
        }
    });

    gsap.from(".hero-para-container",{
        delay: 3,
        duration: 2,
        y: 100,
        ease: "power3.in",
        opacity: 0,
    });


    let rotation = 0;
    window.addEventListener("wheel", (event)=>{
        const direction = event.deltaY > 0 ? 1 : -1;

        rotation += 5 * direction;

        gsap.to(".scroll-circle img",{
            rotation: rotation,
            duration: 1,
            ease: "power3.out",
        });
    });


    const tl = gsap.timeline();
    let split  = SplitText.create(".line", {type: "chars"});
    console.log(split);
    console.log(split.chars[0].textContent);

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

    //developer animation
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

   

    


    // //developer changing animation
    //     .from(split.chars[11], {
    //         ease: "power2.inOut",
    //     scrambleText: {
    //         text: "s",
    //         chars: " ",
    //         // autoAlpha: 1,
    //     }})
    //     .from(split.chars[12], {
    //         ease: "power2.inOut",
    //     scrambleText: {
    //         text: "i",
    //         chars: " ",
    //         // autoAlpha: 1,
    //     }})
    //     .from(split.chars[13], {
    //         ease: "power2.inOut",
    //     scrambleText: {
    //         text: "g",
    //         chars: " ",
    //         // autoAlpha: 1,
    //     }},5)
    //     .from(split.chars[14], {
    //         ease: "power2.inOut",
    //     scrambleText: {
    //         text: "n",
    //         chars: " ",
    //         // autoAlpha: 1,
    //     }})
    //     .from(split.chars[15], {
    //         ease: "power2.inOut",
    //     scrambleText: {
    //         text: "e",
    //         chars: " ",
    //         // autoAlpha: 1,
    //     }},5)
    //     .from(split.chars[16], {
    //         ease: "power2.inOut",
    //     scrambleText: {
    //         text: "r",
    //         chars: " ",
    //         // autoAlpha: 1,
    //     }})
    //     .from(split.chars[17], {
    //         ease: "power2.inOut",
    //     scrambleText: {
    //         text: ".",
    //         chars: " ",
    //         // autoAlpha: 1,
    //     }})
    

    
    

    

};
// //*using SplitText 
// let split = SplitText.create(".split", {type: "chars"});

// gsap.from(split.chars,{
//     duration: 1,
//     y: 100,
//     autoAlpha: 0,
//     stagger: .05,

// });

// SplitText.create(".split", {
//   type: "chars",
//   autoSplit: true,
//   onSplit(self) {
//     return gsap.from(self.chars, {
//       duration: 1, 
//       y: 100, 
//       autoAlpha: 0, 
//       stagger: 0.05
//     });
//   }
// });


// gsap.to(".scrambleText2",{
//     duration: 1,
//     scrambleText: {
//         text: "Hello, I am a Developer.",
//         chars: "XO",
//         // revealDelay: .5,
//         speed: .3,
//         newClass: "myClass",
//     }   
// });
// gsap.to(".page2", {
//     rotate: 360,
//     scale: 3,
//     // repeat: -1,
//     duration: 2,
//     scrollTrigger: {
//         trigger: ".page2",
//         scroller: "body",
//         start: "top 70%",
//         end: "top 10%",
//         scrub: 3,
//         markers: true,
//     }
// });