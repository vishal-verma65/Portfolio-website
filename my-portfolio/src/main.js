import { gsap } from "gsap";
import { heroAnimation } from "./heroAnimation";
import { aboutAnimation } from "./aboutAnimation";
import { collabAnimation } from "./collabAnimation";
import { showProjectContainer } from "./showProjectContainer";
import projects from "../api/projects.json";
import { projectAnimation } from "./projectAnimation";
import { otherAnimation } from "./otherAnimation";

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
