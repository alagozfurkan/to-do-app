import { project1, project4, project5 } from "./project";

const projectContainer = {
   projectContainerArray: [],
   staticProjects: [],

    addProject(project) {
        this.projectContainerArray.push(project);
    },

    addStaticProject(project) {
        this.staticProjects.push(project);
    }

    // add method for removing projects from the array
    // after you figure our how to render things
}

export {projectContainer}