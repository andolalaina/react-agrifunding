import { projects } from "../data/mock";


export const getLendingProjects = (page : number = 0, size : number = 2) => {
    const startIndex = (page) * size;
    const endIndex = ((page) * size) + size;
    return projects.slice(startIndex, endIndex)
}

export const getActiveProjects = (page : number = 0, size : number = 2) => {
    const startIndex = (page) * size;
    const endIndex = ((page) * size) + size;
    return projects.filter(project => project.status === 'In Progress').slice(startIndex, endIndex)
}

export const getProjectDetail = (id: string) => {
    const project = projects.find(project => project.id === id)
    if (project === undefined)
        throw new Error("Project not found")
    return project
}

export const countLendingProjects = () => {
    return projects.length
}