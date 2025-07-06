const projectTemplate = document.querySelector("#projectTemplate");
const projectContainer = document.querySelector("#project-container");

export const showProjectContainer = (projects)=>{
    if(!projects){
        return false;
    };

    projects.forEach((curProduct)=>{
        const {id, title, techUsed, viewLink, repoLink, landingPageImg} = curProduct;

        const cloneProduct = document.importNode(projectTemplate.content, true);

        cloneProduct.querySelector("#projectId").setAttribute("id", `project${id}`);
        cloneProduct.querySelector(".projectTitle").textContent = title;
        cloneProduct.querySelector(".techUsed").textContent = techUsed;
        cloneProduct.querySelector(".project-view").href = viewLink;
        cloneProduct.querySelector(".project-git-icon").href = repoLink;

        projectContainer.appendChild(cloneProduct);
    });
};