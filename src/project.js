class Project {
    constructor (title) {
        this.title = title;
        this.toDoContainer = []; 
    }

    addToDo(todo) {
        this.toDoContainer.push(todo);
    }

    //method for deleting todo's from the container.
    //define after you handeled hot to render things
    
}


export {Project}