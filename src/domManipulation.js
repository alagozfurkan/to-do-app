const projectcontainer = document.querySelector(".projectcontainer");
const todocontainerdiv = document.querySelector(".todocontainer");

function projectRenderer(projectContainer) {
    projectContainer.forEach(project => {
        const button = document.createElement("button");
        button.addEventListener("click", function() {
            todoRenderer(project.toDoContainer)
        })
        button.innerHTML = project.title;
        projectcontainer.appendChild(button);
    });
}

function todoRenderer(todocontainer) {
    todocontainerdiv.textContent = "";
    todocontainer.forEach(todo => {
        const tododiv = document.createElement("div");
        tododiv.innerHTML = todo.title;
        todocontainerdiv.appendChild(tododiv);
    });
}







export {projectRenderer}