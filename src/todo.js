class ToDo {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = false;
    }

    editTitle(title) {
        this.title = title;
    }

    editDescription(description) {
        this.description = description;
    }

    editDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    editPriority(priority) {
        this.priority = priority;
    }

    editChecklist(checklist) {
        this.checklist = checklist;
    }
}


export {ToDo}