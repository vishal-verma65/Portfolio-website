import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export const collabAnimation = ()=>{

    //slider animation
    gsap.to(".left-slide", {
        x: "-100%",
        ease: "none",
        duration: 15,
        repeat: -1,
    });

    gsap.to(".right-slide", {
        x: "0%",
        ease: "none",
        duration: 15,
        repeat: -1,
    });

    // memorable word change animation
    function wordChange(){
        gsap.to(".memorable-span",{
            delay: 3,
            duration: 2,
            scrambleText: {
                text: "iconic",
                chars: "XO",
                speed: 1,
            },
            conComplete: reChange,
        });
    };
    wordChange();
    function reChange(){
        gsap.to(".memorable-span",{
            delay: 6,
            duration: 2,
            scrambleText: {
                text: "memorable",
                chars: " ",
                speed: 1,
                },
            onComplete:  wordChange,

        });
    };

    //together word change animation
    function togetherChange(){
        gsap.to(".together-span",{
            delay: 2,
            duration: 2,
            scrambleText: {
                text: "as partners",
                chars: " ",
                speed: 1,
            },
            conComplete: reChangeTogether,
        });
    };
    togetherChange();
    function reChangeTogether(){
        gsap.to(".together-span",{
            delay: 4,
            duration: 2,
            scrambleText: {
                text: "together",
                chars: "XO",
                speed: 1,
                },
            onComplete: togetherChange,

        });
    };
};
