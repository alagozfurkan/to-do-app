import "./styles.css"
import { ToDo } from "./todo";
import { Project } from "./project";
import { projectContainer } from "./projectcontainer";
import { projectRenderer } from "./domManipulation";

const todo1 = new ToDo("Study coding.", "study coding for improving yourself.", "tomorrow", 1);
const todo2 = new ToDo("Wake up early", "Start the day with energy and more productive hours.", "tomorrow", 2);
const todo3 = new ToDo("Exercise for 30 minutes", "Stay active and improve physical and mental health.", "tomorrow", 3);
const todo4 = new ToDo("Read 10 pages of a book", "Expand knowledge and improve focus.", "tomorrow", 1);
const todo5 = new ToDo("Plan the days tasks", "Organize priorities to work efficiently.", "tomorrow", 3);
const todo6 = new ToDo("Sleep before midnight", "Ensure proper rest for better concentration and productivity.", "tomorrow", 2);
const todo7 = new ToDo("Fix navbar responsiveness", "Ensure smooth navigation on all screen sizes.", "tomorrow", 3);
const todo8 = new ToDo("Improve page loading speed", "Optimize images, scripts, and styles for faster performance.", "tomorrow", 3);
const todo9 = new ToDo("Debug form validation", "Fix errors in user input handling for better UX.", "tomorrow", 2);
const todo10 = new ToDo("Learn about WebAssembly", "Explore ways to boost web app performance with low-level code.", "tomorrow", 3);
const todo11 = new ToDo("Refactor CSS style", "Clean up and optimize styles for maintainability.", "tomorrow", 1);
const todo12 = new ToDo("Practice one mock interview", "Simulate a real interview to boost confidence.", "tomorrow", 1);
const todo13 = new ToDo("Improve coding speed", "Work on solving problems faster with better time management.", "tomorrow", 2);
const todo14 = new ToDo("Review common system design pattern", "Understand architectural approaches for scalable applications.", "tomorrow", 2);
const todo15 = new ToDo("Update LinkedIn profile", " Improve visibility for recruiters by adding new skills and projects.", "tomorrow", 3);
const todo16 = new ToDo("Revise yesterdays notes", "Reinforce learning and retain important details.", "tomorrow", 1);


const project1 = new Project("Beatiful Game");
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
console.log(project1)
console.log(project2)
console.log(project3)


projectContainer.addProject(project1);
projectContainer.addProject(project2);
projectContainer.addProject(project3);

console.log(projectContainer.projectContainerArray)

projectRenderer(projectContainer.projectContainerArray);



