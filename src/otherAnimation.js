import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );


export const otherAnimation = ()=>{

    //bottom corner rotating circle animation
    let lastScrollTop = window.scrollY;
    let rotation = 0;

    window.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY;
    const direction = currentScrollTop > lastScrollTop ? 1 : -1;

    rotation += 5 * direction;
    lastScrollTop = currentScrollTop;

            gsap.to(".scroll-img",{
                rotation: rotation,
                duration: 1,
                ease: "power3.out",
            });
        });

    if(window.innerWidth >= 1010){
        gsap.to(".inner-circle",{
        transform: "translateY(-100%)",
            scrollTrigger: {
                trigger: ".inner-circle",
                scroller: "body",
                start: "top 90%",
                end: "+=1300%",
                scrub: true,
            }
        });
    }
    else{
        gsap.to(".inner-circle",{
        transform: "translateY(-100%)",
            scrollTrigger: {
                trigger: ".inner-circle",
                scroller: "body",
                start: "top 90%",
                end: "+=550%",
                scrub: true,
            }
        });
    }


    //theme toggle functionality
    const element = document.querySelector(".menu-btn")

    //function to get value of toggle according to the default text color 
    function toggleValue(){
        const value = getComputedStyle(element).getPropertyValue('--textColor').trim();
    
        let val;

        if(value === "#d9d9d9"){
            return val = 0;
        }
        else{
            return val = 1;
        }
    }

    //light theme modification
    function lightTheme(){
        document.documentElement.style.setProperty("--primaryColor", "#F5F5F5");
            document.documentElement.style.setProperty("--textColor", "#071e22");

            const logoImg = document.querySelectorAll(".logo-img");
            
            logoImg.forEach( curElem => {
                curElem.setAttribute("src", "/images/theme-logo.webp");
            });
            document.querySelector("#cancel-icon").setAttribute("src", "/images/theme-cancel-icon.svg");
            document.querySelector("#menu-icon").setAttribute("src", "/images/theme-menu-icon.svg");
            document.querySelector("#bg-flower").setAttribute("src", "/images/theme-flower.webp");
            document.querySelector(".scroll-img").setAttribute("src", "/images/theme-circle.webp");
            document.querySelector("#down-arrow").setAttribute("src", "/images/theme-down-arrow.svg");
            document.querySelector(".github-icon").setAttribute("src", "/images/theme-github-icon.svg");

            gsap.to(".ball",{
                transform: "translateY(166%)",
                duration: .3,
                ease: "bounce.out",
            });
    }
    //dark theme modification
    function darkTheme(){
        document.documentElement.style.setProperty("--primaryColor", "#071E22");
            document.documentElement.style.setProperty("--textColor", "#d9d9d9");

            const logoImg = document.querySelectorAll(".logo-img");
            
            logoImg.forEach( curElem => {
                curElem.setAttribute("src", "/images/logo.webp");
            });
            document.querySelector("#cancel-icon").setAttribute("src", "/images/cancel-icon.svg");
            document.querySelector("#menu-icon").setAttribute("src", "/images/menu-icon.svg");
            document.querySelector("#bg-flower").setAttribute("src", "/images/hero-flower.webp");
            document.querySelector(".scroll-img").setAttribute("src", "/images/scroll-down-circle.webp");
            document.querySelector("#down-arrow").setAttribute("src", "/images/down-arrow.svg");
            document.querySelector(".github-icon").setAttribute("src", "/images/github-icon.svg");

            gsap.to(".ball",{
                transform: "translateY(-0%)",
                duration: .3,
                ease: "bounce.out",
            });
    }

    //getting data from the local storage of preferred theme and applying the modifications accordingly 
    const theme = localStorage.getItem("preferredTheme");
    if(theme === "#d9d9d9"){
        lightTheme();
    }
    else{
        darkTheme();
    }

    //theme toggling when the theme toggle button is clicked
    let toggle = toggleValue();
    document.querySelector(".theme-toggle-container").addEventListener("click", ()=>{

        const value = getComputedStyle(element).getPropertyValue('--textColor').trim();
        localStorage.setItem("preferredTheme", value );
        
        if(toggle == 0){
            lightTheme();
        }
        else{
            darkTheme();
        }

        //toggling the value of toggle from 1 to 0 or 0 to 1
        toggle == 0 ? toggle = 1 : toggle = 0;

    });

    //fullScreen navigation section 
    document.querySelector(".menu-btn").addEventListener("click", () => {
        const tl = gsap.timeline();

        tl.to(".fullNav",{
            translateX: 0,
        })
        .from(".full-nav-item",{
            x: 50,
            duration: .3,
            ease: "power3.inOut",
            stagger: .2,
            autoAlpha: 0,
        })

    });
    document.querySelector(".cancel-menu").addEventListener("click", () => {
        const tl = gsap.timeline();

        tl.to(".fullNav",{
            translateX: "110%",
        })
    });

    const gmailDiv = document.querySelector(".mail-div");

    gmailDiv.addEventListener("click", () => {
        navigator.clipboard.writeText("sayhello.vishalverma@gmail.com").then(() => {
        alert("Copied to clipboard");
        }).catch(err => {
        console.error("Please try again");
        });
    });
    

};


