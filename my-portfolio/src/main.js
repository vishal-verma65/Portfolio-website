import { gsap } from "gsap";
import { heroAnimation } from "./heroAnimation";
import { aboutAnimation } from "./aboutAnimation";
import { collabAnimation } from "./collabAnimation";
import { showProjectContainer } from "./showProjectContainer";
import projects from "../api/projects.json";
import { projectAnimation } from "./projectAnimation";
import { otherAnimation } from "./otherAnimation";

// const screenWidth = window.innerWidth;
// console.log(screenWidth);
// const screenHeight = window.innerHeight;
// console.log(screenHeight);

//loader animation
window.addEventListener("load", () => {
  // Fade out the loader
    gsap.to("#loader", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
        document.getElementById("loader").style.display = "none";
        }
    });
});

otherAnimation();
heroAnimation();
aboutAnimation();

showProjectContainer(projects);
projectAnimation();

collabAnimation();


//function for updating the position of toggle button in respect to the container 
const container = document.querySelector(".container");
function updateToggleButtonPosition(){
  const toggleButton = document.querySelector(".theme-toggle-container");

  const containerLeft = container.getBoundingClientRect().left;
  toggleButton.style.left = `${containerLeft + 5}px`;

  // console.log(containerLeft);
}

//function for updating the position of scrolling circle in respect to the container 
function updateScrollCirclePosition(){

  if(window.innerWidth < 1400){
    return false;
  }
  const scrollCircle = document.querySelector(".scroll-circle");

  const containerRight = window.innerWidth - container.getBoundingClientRect().right;
  scrollCircle.style.right = `${containerRight + 20}px`;

  console.log(containerRight);
}

window.addEventListener("load", ()=>{
  updateToggleButtonPosition();
  updateScrollCirclePosition();
});
window.addEventListener("resize", ()=>{
  updateToggleButtonPosition();
  updateScrollCirclePosition();
});

