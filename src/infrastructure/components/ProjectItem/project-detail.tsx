import { Grid2 as Grid, Card, CardActionArea, CardContent, CardActions, Button, Divider, Typography } from "@mui/material"
import { useParams } from "react-router"
import { getProjectDetail } from "../../../domain/services/lendingProject.service"
import { ProjectItemContent } from "./project-item-content"
import { Map } from "../../components/Map"

export const ProjectDetail = () => {
    const { id } = useParams()
    const data = getProjectDetail(id!)
    const customLayersData = [
        {
            url: "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg",
            name: "stadia",
            colors: ['#FF0000', '#00FF00', '#0000FF'],
            labels: ['Low', 'Medium', 'High'],
            isActive: false
        },
        {
            url: "https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png",
            name: "forest",
            colors: ["#FF0000", "#00FFFF", "#0000FF"],
            labels: ["Low", "Medium", "High"],
            isActive: false
        },
    ]

    return (
        <>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
            <Card>
                <CardActionArea>
                {/* Using the new Map component */}
                <Map 
                    center={[data.location.lat, data.location.lng]}
                    zoom={8}
                    markerPosition={[data.location.lat, data.location.lng]}
                    markerPopup="A pretty CSS3 popup. <br /> Easily customizable."
                    customLayers={customLayersData}
                    height="500px"
                />
                    <CardContent>
                        <ProjectItemContent data={data} />
                        <Divider sx={{"marginBottom": "1rem", "marginTop": "1rem"}} />
                        <Typography variant="body2">
                            {data.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        </Grid>
        </>
    )
}