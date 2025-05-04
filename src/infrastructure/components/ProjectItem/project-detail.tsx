import { Grid2 as Grid, Card, CardActionArea, CardContent, CardActions, Button, Divider, Typography } from "@mui/material"
import { useParams } from "react-router"
import { getProjectDetail } from "../../../domain/services/lendingProject.service"
import { ProjectItemContent } from "./project-item-content"
import { Map } from "../../components/Map"
import { useEffect, useState } from "react"
import { getAccessibilityIndexData, getPrecipitationDroughtIndexData } from "../../../domain/services/layers.service"

export const ProjectDetail = () => {
    const { id } = useParams()
    const data = getProjectDetail(id!)
    const [ customLayers, setCustomLayers ] = useState<any>([])

    useEffect(() => {
        Promise.all([
            getPrecipitationDroughtIndexData(data.location.lat, data.location.lng),
            getAccessibilityIndexData(data.location.lat, data.location.lng)
        ])
        .then(([precipitationData, accessibilityData]) => {
            setCustomLayers([precipitationData, accessibilityData]);
        })
        .catch((error) => {
            console.error("Error fetching layer data:", error);
        });
    }, [])

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
                    customLayers={customLayers}
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