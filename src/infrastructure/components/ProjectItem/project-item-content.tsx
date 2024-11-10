import { Box, LinearProgress, Rating, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { formatCurrency, formatDate } from "../../../utils/formatter";
import { ProjectListItemDTO } from "../../../domain/dto/project.dto";

type Props = {
    data: ProjectListItemDTO
}


export const ProjectItemContent = ({ data } : Props) => {
    return (
        <Grid container>
            <Grid size={{ xs: 12 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>

                <Rating size="small" name="read-only" value={data.rating} readOnly />
                <Box sx={{ marginBottom: "1rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                        <PersonIcon fontSize="small" sx={{ marginRight: ".3rem" }}/>
                        <Typography variant="caption">{data.owner.name} - {data.owner.job}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                        <CalendarTodayIcon fontSize="small" sx={{ marginRight: ".3rem" }} />
                        <Typography variant="caption" sx={{ verticalAlign: "bottom" }}>{ formatDate(new Date(data.submissionDate)) }</Typography>
                    </Box>
                </Box>
                <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="caption">
                        { formatCurrency(data.fundActual) } sur { formatCurrency(data.fundTarget) }
                    </Typography>
                    <LinearProgress variant="determinate" value={80} />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.description}
                </Typography>

            </Grid>
        </Grid>
    )
}