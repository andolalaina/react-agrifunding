import { Box, Grid2 as Grid, Rating, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { formatCurrency, formatDate } from "../../../utils/formatter";


type Item = {
    id: string
    title: string
    description: string
    rating: number
    owner: string
    submissionDate: string
    fundActual: number
    fundTarget: number
}

type Props = {
    data: Item
}

export const ProjectItem = ({ data } : Props) => {
    return (
    <Card sx={{ margin: "1rem auto", maxWidth: "80vw" }}>
      <CardContent>
        <Grid container>
            <Grid size={{ xs: 12, sm: 10 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Rating size="small" name="read-only" value={data.rating} readOnly />
                <Box sx={{ marginBottom: "1rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                        <PersonIcon fontSize="small" sx={{ marginRight: ".3rem" }}/>
                        <Typography variant="caption">{data.owner}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                        <CalendarTodayIcon fontSize="small" sx={{ marginRight: ".3rem" }} />
                        <Typography variant="caption" sx={{ verticalAlign: "bottom" }}>{ formatDate(new Date(data.submissionDate)) }</Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.description}
                </Typography>
            </Grid>
            <Grid size={{xs:12, sm: 2}}>
                <Typography variant="h6">
                    { formatCurrency(data.fundActual) } / { formatCurrency(data.fundTarget) }
                </Typography>
            </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small"> <Link to={data.id}>View Detail</Link></Button>
      </CardActions>
    </Card>
    )
}