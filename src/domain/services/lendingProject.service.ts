import { projects } from "../data/mock";
import { ProjectCreateDTO } from "../dto/project.dto";
import axiosInstance from "./axios.service";


export const getLendingProjects =async (page : number = 0, size : number = 2) => {
    const startIndex = (page) * size;
    const endIndex = ((page) * size) + size;
    const projects = (await axiosInstance.get('/items')).data.data
    return projects.slice(startIndex, endIndex)
}

export const insertLendingProject = async (project: ProjectCreateDTO) => {
    const response = await axiosInstance.post('/items', {...project, longitude: project.location.lng, latitude: project.location.lat})
    return response.data
}

export const getActiveProjects = (page : number = 0, size : number = 2) => {
    const startIndex = (page) * size;
    const endIndex = ((page) * size) + size;
    return projects.filter(project => project.status === 'In Progress').slice(startIndex, endIndex)
}

export const getProjectDetail = async (id: string) => {
    const project = (await axiosInstance.get('/items/'+id)).data
    if (project === undefined)
        throw new Error("Project not found")
    return {
        ...project, 
        location: {
            lat: project.latitude,
            lng: project.longitude
        }
    }
    return project
}

export const countLendingProjects = () => {
    return projects.length
}