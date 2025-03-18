import "./styles.css"
import { ToDo } from "./todo";
import { Project } from "./project";
import { projectContainer } from "./projectcontainer";
import { projectRenderer, staticProjectRenderer } from "./domManipulation";
import { dateParser } from "./dateparser";

const todo1 = new ToDo("Study coding.", "study coding for improving yourself.", "2025-03-17", 1);
const todo2 = new ToDo("Wake up early", "Start the day with energy and more productive hours.", "2025-03-17", 2);
const todo3 = new ToDo("Exercise for 30 minutes", "Stay active and improve physical and mental health.", "2025-03-17", 3);
const todo4 = new ToDo("Read 10 pages of a book", "Expand knowledge and improve focus.", "2025-03-17", 1);
const todo5 = new ToDo("Plan the days tasks", "Organize priorities to work efficiently.", "2025-03-17", 3);
const todo6 = new ToDo("Sleep before midnight", "Ensure proper rest for better concentration and productivity.", "2025-03-17", 2);
const todo7 = new ToDo("Fix navbar responsiveness", "Ensure smooth navigation on all screen sizes.", "2025-03-17", 3);
const todo8 = new ToDo("Improve page loading speed", "Optimize images, scripts, and styles for faster performance.", "2025-03-17", 3);
const todo9 = new ToDo("Debug form validation", "Fix errors in user input handling for better UX.", "2025-03-17", 2);
const todo10 = new ToDo("Learn about WebAssembly", "Explore ways to boost web app performance with low-level code.", "2025-03-17", 3);
const todo11 = new ToDo("Refactor CSS style", "Clean up and optimize styles for maintainability.", "2025-03-17", 1);
const todo12 = new ToDo("Practice one mock interview", "Simulate a real interview to boost confidence.", "2025-03-17", 1);
const todo13 = new ToDo("Improve coding speed", "Work on solving problems faster with better time management.", "2025-03-17", 2);
const todo14 = new ToDo("Review common system design pattern", "Understand architectural approaches for scalable applications.", "2025-03-17", 2);
const todo15 = new ToDo("Update LinkedIn profile", " Improve visibility for recruiters by adding new skills and projects.", "2025-03-17", 3);
const todo16 = new ToDo("Revise yesterdays notes", "Reinforce learning and retain important details.", "2025-03-17", 1);


const project1 = new Project("All");
const project4 = new Project("Today");
const project5 = new Project("This Week");
const project2 = new Project("Bad Project");
const project3 = new Project("Mid Project");

project1.addToDo(todo1)
project1.addToDo(todo2)
project1.addToDo(todo3)
project2.addToDo(todo4)
project2.addToDo(todo5)
project2.addToDo(todo6)
project2.addToDo(todo7)
project2.addToDo(todo8)
project2.addToDo(todo9)
project2.addToDo(todo10)
project3.addToDo(todo11)
project3.addToDo(todo12)
project3.addToDo(todo13)
project3.addToDo(todo14)
project3.addToDo(todo15)
project3.addToDo(todo16)





console.log("projectContainer",projectContainer.projectContainerArray)
    
    //get projects from local storage if there is;
    const storedProjects = JSON.parse(localStorage.getItem('storedProjects') || "[]");
    
    if (storedProjects.length == 0) {
        storedProjects.push(project1)
        storedProjects.push(project4)
        storedProjects.push(project5)
        storedProjects.push(project2)
        storedProjects.push(project3)
    } 
        
    
        
            
        
    
    localStorage.setItem("storedProjects", JSON.stringify(storedProjects)); 
    //we can not push this projects to storedProject just we can not!!!
    

    

    console.log("local", storedProjects)
    //clean the deleted objects from local storage
    storedProjects.forEach((storedProject) => {
        if (storedProject.deleteStatus == true) {
            let index = storedProjects.indexOf(storedProject);

            if (index > -1) {
                storedProjects.splice(index, 1);
            }
        }
    })
    storedProjects.forEach((storedProject) => {storedProject.toDoContainer.forEach(storedtodo => {
        if (storedtodo.deleteStatus == true) {
            let index = storedProject.toDoContainer.indexOf(storedtodo);
            if (index > -1) { 
                storedProject.toDoContainer.splice(index, 1);
            }
        
        }
    })})
    

   
    console.log("local", storedProjects)
    //add them their method(because JSON does not take functions or methods with it);
    storedProjects.forEach(project => {
        if (project.addToDo) {
            return
        } else {
            project.addToDo = function (todo) {
                this.toDoContainer.push(todo);
            };
        }
        
    })

    storedProjects.forEach((storedProject) => {storedProject.toDoContainer.forEach(storedtodo => {

            if (storedtodo.editTitle) {
                return
            } else {
                storedtodo.editTitle = function (title) {
                    this.title = title;
                }
            }
        
            if (storedtodo.editDescription) {
                return
            } else {
                storedtodo.editDescription = function (description) {
                    this.description = description;
                }
            }
            
            if (storedtodo.editDueDate) {
                return
            } else {
                storedtodo.editDueDate = function (dueDate) {
                    this.dueDate = dueDate;
                }
            }
            
            if (storedtodo.editPriority) {
                return
            } else {
                storedtodo.editPriority = function (priority) {
                    this.priority = priority;
                }
            }
            
        
    })})
    //concat this fetched projects to projectContainer so they can be rendered
    projectContainer.projectContainerArray = projectContainer.projectContainerArray.concat(storedProjects);
    dateParser();
    projectRenderer(projectContainer.projectContainerArray);



export {project1, project4, project5}
export {projectContainer}