import { Grid2 as Grid } from "@mui/material"
import { getLendingProjects } from "../../../domain/services/lendingProject.service"
import { ProjectItem } from "../../components/ProjectItem/project-item"
import { useEffect, useState } from "react"




export const ProjectListScreen = () => {
    const [  projectItems, setProjectItems ] = useState<any>([])

    useEffect(() => {
        getLendingProjects(0, 100).then((data) => {
            setProjectItems(data)
        })
    }, [])

    return (
        <>
        <h2>Liste des projets</h2>
        <Grid container spacing={2}>
        {projectItems.length > 0 ? projectItems.map((item : any) => (
            <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <ProjectItem data={item} />
            </Grid>
        )) : (<p>Aucun projet trouvé</p>)}
        </Grid>
        </>
    )
}