import { projectContainer } from "./projectcontainer";
import { project1, project4, project5 } from ".";
const { isToday } = require("date-fns");
const { isThisWeek } = require("date-fns");

let x = projectContainer.projectContainerArray[0];

function dateParser() {
    
    projectContainer.projectContainerArray.forEach(project => { project.toDoContainer.forEach(todo => {

        
        
        if (projectContainer.projectContainerArray[0].toDoContainer.includes(todo)) {
            return
        } else {
            //let copiedTodo = todo;
            projectContainer.projectContainerArray[0].toDoContainer.push(todo)}
        
        
        if (projectContainer.projectContainerArray[1].toDoContainer.includes(todo)) {
            return
        } else if (isToday(todo.dueDate)) {
            projectContainer.projectContainerArray[1].toDoContainer.push(todo)
        }

        if (projectContainer.projectContainerArray[2].toDoContainer.includes(todo)) {
            return
        } else if (isThisWeek(todo.dueDate)) {
            projectContainer.projectContainerArray[2].toDoContainer.push(todo)
        }
        
    });
        
    });
}

export {dateParser};