const projectTemplate = document.querySelector("#projectTemplate");
const projectContainer = document.querySelector("#project-container");

export const showProjectContainer = (projects)=>{
    //checking if there are any projects available in the projects json file
    if(!projects){
        return false;
    };

    //cloning the html template for each project available in the projects and then inserting values to them
    projects.forEach((curProduct)=>{
        //destructuring the current product
        const {id, title, techUsed, viewLink, repoLink, landingPageImg, description, category} = curProduct;

        //cloning the html template
        const cloneProduct = document.importNode(projectTemplate.content, true);

        cloneProduct.querySelector("#projectId").setAttribute("id", `project${id}`);
        cloneProduct.querySelector(".projectTitle").textContent = title;
        cloneProduct.querySelector(".techUsed").textContent = techUsed;
        cloneProduct.querySelector(".project-view").href = viewLink;
        cloneProduct.querySelector(".project-git-icon").href = repoLink;

        cloneProduct.querySelector(".desc").textContent = description;
        cloneProduct.querySelector(".projectImg").src = landingPageImg;
        cloneProduct.querySelector(".projectImg").alt = title;
        cloneProduct.querySelector(".category").textContent = category;

        //appending the cloned template in the project container
        projectContainer.appendChild(cloneProduct);
    });
};