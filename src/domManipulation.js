import { Project } from "./project";
import { projectContainer } from "./projectcontainer";
import { ToDo } from "./todo";
import { dateParser } from "./dateparser";
import { project1, project4, project5 } from ".";

const projectcontainer = document.querySelector(".projectcontainer");
const staticprojectcontainer = document.querySelector(".staticprojectcontainer")
const todocontainerdiv = document.querySelector(".todocontainer");
const addProject = document.querySelector(".addProject");
const projectsubmitbutton = document.querySelector(".ProjectSubmit");
const projectname = document.querySelector("#projectname");
const addtodo = document.querySelector(".addTodo");
const todosubmitbutton = document.querySelector(".todoSubmit");
const todotitle = document.querySelector("#todotitle");
const tododescription = document.querySelector("#tododescription");
const tododueDate = document.querySelector("#tododueDate");
const radiovalue = document.getElementsByName("priority");
const todoform = document.querySelector(".todoform");
const showdetail = document.querySelector(".showdetail");
const detailclosebutton = document.querySelector(".detailclosebutton");
const detailtitle = document.querySelector(".detailtitle");
const detaildescription = document.querySelector(".detaildescription");
const detaildate = document.querySelector(".detaildate");
const detailpriority = document.querySelector(".detailpriority");
const titleinput = document.querySelector("#title")



function projectRenderer(projectContainer) {
    projectcontainer.textContent = "";
    staticprojectcontainer.textContent = "";


    projectContainer.forEach(project => {
        if (project.deleteStatus == true) {
            return
        } else {
            const button = document.createElement("div");
            button.classList.add("project")
            button.addEventListener("click", function() {
                todoRenderer(project.toDoContainer, project)
                addTodoViaDom(project);
            })
    
            if (project.title == "All" || project.title == "Today" || project.title == "This Week") {
                button.innerHTML = project.title;
                staticprojectcontainer.appendChild(button);
            } else {
                button.innerHTML = project.title;
                projectcontainer.appendChild(button);
    
                const projectdeletebutton = document.createElement("button");
                projectdeletebutton.innerHTML = "Delete";
                button.appendChild(projectdeletebutton);
                projectdeletebutton.addEventListener("click", function(event) {
                event.stopPropagation();
                project.deleteStatus = true;

                // local storage handling
                const storedProjects = JSON.parse(localStorage.getItem('storedProjects') || "[]");
                storedProjects.forEach(storedProject => {
                    if (project.title == storedProject.title) {
                        storedProject.deleteStatus = true;
                    }
                })
                localStorage.setItem("storedProjects", JSON.stringify(storedProjects));


                projectRenderer(projectContainer)
                todocontainerdiv.textContent = "";
            })
            }            
        }
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





function todoRenderer(todocontainer, projectobject) {
    console.log("selalmlar", projectobject)
    console.log(todocontainer)
    todocontainerdiv.textContent = "";
    todocontainer.forEach(todo => {
        if (todo.deleteStatus == true) {
            return
        }
        
        const tododiv = document.createElement("div");
        tododiv.classList.add("tododiv")

        const todobuttoncontainer = document.createElement("div");


        const chekbox = document.createElement("input");
        chekbox.type = "checkbox";
        tododiv.appendChild(chekbox);

        chekbox.addEventListener("change", function() {
            
            // local storage handling
            var storedProjects = JSON.parse(localStorage.getItem('storedProjects') || "[]");
            storedProjects.forEach((storedProject) => {storedProject.toDoContainer.forEach(storedtodo => {
                if (todo.title == storedtodo.title) {
                    if (this.checked) {
                        
                        storedtodo.checklist = true;
                    } else {
                        
                        storedtodo.checklist = false;
                    }
                }
            })})
            localStorage.setItem("storedProjects", JSON.stringify(storedProjects));




            if (this.checked) {
                tododiv.style.color = "red"
                todo.checklist = true;
            } else {
                tododiv.style.color = ""
                todo.checklist = false;
            }
            
            
        })

        if (todo.checklist == true) {
            chekbox.checked = true
            tododiv.style.color = "red";
        }

        const tododivtitle = document.createElement("div");
        tododivtitle.classList.add("tododivtitle")
        tododivtitle.innerHTML = todo.title;
        tododiv.appendChild(tododivtitle);
        todocontainerdiv.appendChild(tododiv); 

        const tododate = document.createElement("div");
        tododate.innerHTML = todo.dueDate;
        tododate.classList.add("tododate")
        tododiv.appendChild(tododate);  

        //render delete button
        const deletetodobutton = document.createElement("button");
        todobuttoncontainer.appendChild(deletetodobutton);
        
        deletetodobutton.innerHTML = "Delete"
        

        deletetodobutton.addEventListener("click", function() {
            
            todo.deleteStatus = true;

            // local storage handling
            var storedProjects = JSON.parse(localStorage.getItem('storedProjects') || "[]");
            
            storedProjects.forEach((storedProject) => {storedProject.toDoContainer.forEach(storedtodo => {
                if (todo.title == storedtodo.title) {
                    storedtodo.deleteStatus = true;
                }
            })})
            localStorage.setItem("storedProjects", JSON.stringify(storedProjects));
            
            todoRenderer(todocontainer, projectobject);
            
            addTodoViaDom(projectobject);
        
        })
        //render detail button
        const detailbutton = document.createElement("button");
        detailbutton.innerHTML = "Detail";
        
        todobuttoncontainer.appendChild(detailbutton)
        
        detailbutton.addEventListener("click", function(){
            detailtitle.innerHTML = todo.title;
            detaildescription.innerHTML = todo.description;
            detaildate.innerHTML = todo.dueDate;
            detailpriority.innerHTML = todo.priority;
            showdetail.showModal();
            
        })

        detailclosebutton.addEventListener("click", function(){
            showdetail.close();
            detailtitle.textContent = "";
            detaildescription.textContent = "";
            detaildate.textContent = "";
            detailpriority.textContent = "";

        })

        //render edit button
        const editbutton = document.createElement("button");
        editbutton.innerHTML = "Edit";
        todobuttoncontainer.appendChild(editbutton);
        todobuttoncontainer.classList.add("todobuttoncontainer")

        tododiv.appendChild(todobuttoncontainer)

        editbutton.addEventListener("click", function(){
            addtodo.showModal();
            todotitle.setAttribute(`value`, todo.title);
            tododescription.value = todo.description;
            tododueDate.value = todo.dueDate;

            //fill the radio button
            for (let i = 0; i < radiovalue.length; i++) {
                if (radiovalue[i].type = "radio") {
                    if(radiovalue[i].value == todo.priority) {
                        radiovalue[i].checked = true;
                    }
                }
                
            }

            
            
            
            if (todoform.lastElementChild.tagName == "BUTTON") {
                todoform.lastChild.remove();
             }

            const editsubmitbutton = document.createElement("button");
            editsubmitbutton.setAttribute("type", "submit")
            editsubmitbutton.innerHTML = "Edit Submit"
            todoform.appendChild(editsubmitbutton);

            editsubmitbutton.addEventListener("click", function(){

                // local storage handling
                var storedProjects = JSON.parse(localStorage.getItem('storedProjects') || "[]");
                storedProjects.forEach((storedProject) => {storedProject.toDoContainer.forEach(storedtodo => {
                    if (todo.title == storedtodo.title) {
                        storedtodo.title = todotitle.value;
                        storedtodo.description = tododescription.value;
                        storedtodo.dueDate = tododueDate.value;
                        storedtodo.priority = getRadioValue();
                    }
                })})
                localStorage.setItem("storedProjects", JSON.stringify(storedProjects));

                todo.editTitle(todotitle.value);
                todo.editDescription(tododescription.value);
                todo.editDueDate(tododueDate.value);
                todo.editPriority(getRadioValue());

                
                todoRenderer(todocontainer, projectobject);
                addTodoViaDom(projectobject);
                todoform.reset();
            
            })
        })

        
        

        
        



    });
}

//
function deleteToDoViaDOM(todoContainer, toDo) {
    let index = todoContainer.indexOf(toDo);
    if (index > -1) { 
        todoContainer.splice(index, 1);
      }
    console.log(todoContainer)
    
    
}

function deleteProjectViaDOM(projectcontainer, project) {
    let index = projectcontainer.indexOf(project);
    if (index > -1) { 
        projectcontainer.splice(index, 1);
      }
    console.log(projectcontainer)
    
    
}




function addProjectViaDom() {
    let project = new Project(projectname.value);
    projectContainer.addProject(project);
    
    // local storage handling
    var storedProjects = JSON.parse(localStorage.getItem('storedProjects') || "[]");
    storedProjects.push(project);
    localStorage.setItem("storedProjects", JSON.stringify(storedProjects));
    
    





    console.log(projectContainer.projectContainerArray)
    projectRenderer(projectContainer.projectContainerArray); 
    
}



function addTodoViaDom(projectObject) {
    const todobutton = document.createElement("button");
    todobutton.innerHTML = "+";
    todocontainerdiv.appendChild(todobutton);

    todobutton.addEventListener("click", function() {
        todoform.reset()
        addtodo.showModal();
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
            let newTodo = new ToDo(todotitle.value, tododescription.value, tododueDate.value, getRadioValue())
            projectObject.addToDo(newTodo);

            // local storage handling
            const storedProjects = JSON.parse(localStorage.getItem('storedProjects') || "[]");
            storedProjects.forEach(storedProject => {
                if (storedProject.title == projectObject.title) {
                   
                    storedProject.toDoContainer.push(newTodo);
                }
            })
            localStorage.setItem("storedProjects", JSON.stringify(storedProjects));
            
            dateParser()
            todoRenderer(projectObject.toDoContainer, projectObject);
            addTodoViaDom(projectObject);
            addtodo.close()
            todoform.reset()
            
        })
    })
    


    



    
    
   /*todosubmitbutton.addEventListener("click", function() {
        projectObject.addToDo(new ToDo(todotitle.value, tododescription.value, tododueDate.value, todofieldset.value))
        console.log(projectObject);
        todoRenderer(projectObject.toDoContainer);
        addTodoViaDom(projectObject);
    }) */
}

function getRadioValue() {
    for (let i = 0; i < radiovalue.length; i++) {
        if (radiovalue[i].type = "radio") {
            if(radiovalue[i].checked) {
                console.log(radiovalue[i].value)
                return radiovalue[i].value;
                
            }
        }
        
    }
}





export {projectRenderer}