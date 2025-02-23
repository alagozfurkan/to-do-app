import { Project } from "./project";
import { projectContainer } from "./projectcontainer";
import { ToDo } from "./todo";

const projectcontainer = document.querySelector(".projectcontainer");
const todocontainerdiv = document.querySelector(".todocontainer");
const addProject = document.querySelector(".addProject");
const projectsubmitbutton = document.querySelector(".ProjectSubmit");
const projectname = document.querySelector("#projectname");
const addtodo = document.querySelector(".addTodo");
const todosubmitbutton = document.querySelector(".todoSubmit");
const todotitle = document.querySelector("#todotitle");
const tododescription = document.querySelector("#tododescription");
const tododueDate = document.querySelector("#tododueDate");
const todofieldset = document.getElementsByName("priority");
const todoform = document.querySelector(".todoform");



function projectRenderer(projectContainer) {
    projectcontainer.textContent = "";
    projectContainer.forEach(project => {
        const button = document.createElement("button");
        button.addEventListener("click", function() {
            todoRenderer(project.toDoContainer)
            addTodoViaDom(project);
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

// todosubmitbutton'a iki kere event listner ekliyor bu fonksiyounun dısına cıkması lazım. cıkarsa calısmaz bir sekilde cozmek lazım.
//priority kısmı calısmıyor onun halledilmesi lazım
function addTodoViaDom(projectObject) {
    const todobutton = document.createElement("button");
    todobutton.innerHTML = "+";
    todocontainerdiv.appendChild(todobutton);

    todobutton.addEventListener("click", function() {
        addtodo.showModal();
    })
    console.log(todoform.lastElementChild.tagName)
    if (todoform.lastElementChild.tagName == "BUTTON") {
        todoform.lastChild.remove();
     }
    const todosubmitbutton = document.createElement("button");
    todosubmitbutton.setAttribute("type", "submit")
    todosubmitbutton.innerHTML = "Submit"
    todoform.appendChild(todosubmitbutton);


    todosubmitbutton.addEventListener("click", function(event) {
        todoform.lastChild.remove()
        event.preventDefault();
        console.log(todoform.children)
        
        console.log(todoform.children)
        projectObject.addToDo(new ToDo(todotitle.value, tododescription.value, tododueDate.value, todofieldset.value))
        
        todoRenderer(projectObject.toDoContainer);
        addTodoViaDom(projectObject);
        addtodo.close()
        
    })
    



    
    
   /*todosubmitbutton.addEventListener("click", function() {
        projectObject.addToDo(new ToDo(todotitle.value, tododescription.value, tododueDate.value, todofieldset.value))
        console.log(projectObject);
        todoRenderer(projectObject.toDoContainer);
        addTodoViaDom(projectObject);
    }) */
}




export {projectRenderer}