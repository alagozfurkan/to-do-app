import "./styles.css"
import { ToDo } from "./todo";
import { Project } from "./project";
import { projectContainer } from "./projectcontainer";
import { projectRenderer } from "./domManipulation";

const todo1 = new ToDo("Study coding.", "study coding for improving yourself.", "tomorrow", 1);
const project1 = new Project("Beatiful Game");
const project2 = new Project("Bad Project");
const project3 = new Project("Mid Project");
projectContainer.addProject(project1);
projectContainer.addProject(project2);
projectContainer.addProject(project3);

projectRenderer(projectContainer.projectContainerArray);



