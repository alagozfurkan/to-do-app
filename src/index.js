import "./styles.css"
import { ToDo } from "./todo";
import { Project } from "./project";
import { projectContainer } from "./projectcontainer";

const todo1 = new ToDo("Study coding.", "study coding for improving yourself.", "tomorrow", 1);
todo1.editTitle("workout")
todo1.editDescription("bla bla bla bla")
const project1 = new Project("Beatiful Game");
console.log(todo1);
projectContainer.addProject(project1);
console.log(projectContainer)


const project2 = new Project("Mid Project");

project1.addToDo(todo1);
console.log(project1);