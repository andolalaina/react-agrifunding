import { Grid2 as Grid } from "@mui/material"
import { getLendingProjects } from "../../../domain/services/lendingProject.service"
import { ProjectItem } from "../../components/ProjectItem/project-item"




export const ProjectListScreen = () => {

  const projectItems = getLendingProjects(0, 100)

    return (
        <>
        <h2>Liste des projets</h2>
        <Grid container spacing={2}>
        { projectItems.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <ProjectItem data={item} />
            </Grid>
        ))}
        </Grid>
        </>
    )
}