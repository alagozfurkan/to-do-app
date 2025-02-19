const projectcontainer = document.querySelector(".projectcontainer")


function projectRenderer(projectContainer) {
    projectContainer.forEach(project => {
        const button = document.createElement("button");
        button.innerHTML = project.title;
        projectcontainer.appendChild(button);
    });
}

export {projectRenderer}