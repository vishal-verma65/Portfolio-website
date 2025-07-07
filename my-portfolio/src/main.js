import { heroAnimation } from "./heroAnimation";
import { aboutAnimation } from "./aboutAnimation";
import { collabAnimation } from "./collabAnimation";
import { showProjectContainer } from "./showProjectContainer";
import projects from "../api/projects.json";
import { projectAnimation } from "./projectAnimation";
import { otherAnimation } from "./otherAnimation";


console.log(projects);

otherAnimation();
heroAnimation();
aboutAnimation();

showProjectContainer(projects);
projectAnimation();

collabAnimation();
