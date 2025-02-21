import { Project } from "./project";
import { projectContainer } from "./projectcontainer";

const projectcontainer = document.querySelector(".projectcontainer");
const todocontainerdiv = document.querySelector(".todocontainer");
const addProject = document.querySelector(".addProject");
const projectsubmitbutton = document.querySelector(".ProjectSubmit");
const projectname = document.querySelector("#projectname");

function projectRenderer(projectContainer) {
    projectcontainer.textContent = "";
    projectContainer.forEach(project => {
        const button = document.createElement("button");
        button.addEventListener("click", function() {
            todoRenderer(project.toDoContainer)
        })
        button.innerHTML = project.title;
        projectcontainer.appendChild(button);
    });
    const addProjectButton = document.createElement("button");
    addProjectButton.innerHTML = "Add Project";
    projectcontainer.appendChild(addProjectButton);

    addProjectButton.addEventListener("click", function(e) {
        addProject.showModal();
    })
}

projectsubmitbutton.addEventListener("click", function() {
    addProjectViaDom()
})


function todoRenderer(todocontainer) {
    todocontainerdiv.textContent = "";
    todocontainer.forEach(todo => {
        const tododiv = document.createElement("div");
        tododiv.innerHTML = todo.title;
        todocontainerdiv.appendChild(tododiv);
    });
}


function addProjectViaDom() {
    projectContainer.addProject(new Project(projectname.value));
    console.log(projectContainer.projectContainerArray)
    projectRenderer(projectContainer.projectContainerArray);
    
}




export {projectRenderer}