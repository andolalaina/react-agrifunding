import { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useParams } from "react-router"
import { Legend } from "../Map/legend"
import { CustomLayerControl } from "../Map/layer-control"
import { getProjectDetail } from "../../../domain/services/lendingProject.service"
import Grid from "@mui/material/Grid2"
import Item from "@mui/material/Box"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import { ProjectItemContent } from "./project-item-content"


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
            url: "	https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png",
            name: "forest",
            colors: ["#FF0000", "#00FFFF", "#0000FF"],
            labels: ["Low", "Medium", "High"],
            isActive: false
        },
    ]
    const [visibleLayers, setVisibleLayers] = useState<any>(
        customLayersData.reduce((acc, layer) => ({ ...acc, [layer.name]: false }), {})
    );

    const handleToggleLayer = (name : string) => {
        setVisibleLayers((prev : any) => ({ ...prev, [name]: !prev[name] }))
    }

    return (
        <>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
            <Card>
                <CardActionArea>
                <MapContainer style={{"height": "500px"}} center={[data.location.lat, data.location.lng]} zoom={8} scrollWheelZoom={true}>
                    <CustomLayerControl layers={customLayersData} toggler={handleToggleLayer} />
                    { customLayersData.slice().reverse().filter((layer) => visibleLayers[layer.name]).map(layer => {
                        return (
                            <>
                                <TileLayer url={layer.url} />
                                <Legend title={layer.name} colors={layer.colors} labels={layer.labels} />
                            </>
                        )
                    }
                    ) }
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    <Marker position={[data.location.lat, data.location.lng]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
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