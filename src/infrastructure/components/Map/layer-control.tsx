import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material"

export const CustomLayerControl = ({layers, toggler} : any) => {
    return (
        <div className="leaflet-top leaflet-right">
            <div className="leaflet-control leaflet-bar">
                <Box sx={{backgroundColor: "white", padding: ".5rem", display: "flex", flexFlow: "column"}}>
                    <Typography variant="h6">Couche de données</Typography>
                    { layers.map((layer : any) =>

                        // <div key={layer.name}>
                        //     <input type="checkbox" name="isActive" id={layer.name} onChange={() => toggler(layer.name)} /> {layer.name}
                        // </div>
                        <FormControlLabel key={layer.name} control={<Checkbox size="small"/>} label={layer.name} onChange={() => toggler(layer.name)} />
                        ) }
                </Box>
            </div>
        </div>
    )
}