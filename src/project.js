import { dateParser } from "./dateparser";
import { ToDo } from "./todo";
import { projectContainer } from "./projectcontainer";

class Project {
    constructor (title) {
        this.title = title;
        this.deleteStatus = false;
        this.toDoContainer = []; 
    }

    addToDo(todo) {
        this.toDoContainer.push(todo);
        //bu todo'yu aynı zamanda project1'a ekle
        
    }

    

    //method for deleting todo's from the container.
    //define after you handeled hot to render things
    
}



export {Project}