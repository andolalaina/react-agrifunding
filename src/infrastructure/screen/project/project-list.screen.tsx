import { getLendingProjects } from "../../../domain/services/lendingProject.service"
import { ProjectItem } from "../../components/ProjectItem/project-item"




export const ProjectListScreen = () => {

  const projectItems = getLendingProjects()

    return (
        <>
        <h2>
            Project Lists
        </h2>
        { projectItems.map((item) => <ProjectItem data={item} />) }
        </>
    )
}