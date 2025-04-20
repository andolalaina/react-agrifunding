import { Box, Button, IconButton, LinearProgress, Rating, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { formatCurrency, formatDate } from "../../../utils/formatter";
import { ProjectListItemDTO } from "../../../domain/dto/project.dto";
import ReportModal from "./project-item-report";
import { useState } from "react";

type Props = {
    data: ProjectListItemDTO
}

const sampleData: any = {
    title: 'Analyse de faisabilité - Plantation de vanille',
    spei: -0.7458,
    accessibility: 0.552,
    recommendations: [
      'Prévoir un système d’irrigation adapté.',
      'Installer un ombrage artificiel ou naturel.',
      'Faire une étude de sol avant plantation.'
    ],
    score: 3.5,
    scoreComment: 'Projet faisable avec précautions hydriques.'
  };

export const ProjectItemContent = ({ data } : Props) => {
    const [open, setOpen] = useState(false);

    return (
        <Grid container>
            <ReportModal open={open} handleClose={() => setOpen(false)} data={sampleData} />
            <Grid size={{ xs: 12 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                
                <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                    <Grid display="flex" alignItems="center">
                        <Rating size="small" name="read-only" value={data.rating} readOnly />
                    </Grid>
                    <Grid>
                        <Button 
                            color="primary" 
                            size="small"
                            variant="outlined"
                            aria-label="view AI recommandations" 
                            startIcon={<TipsAndUpdatesIcon fontSize="small" />}
                            onClick={() => setOpen(true)}
                        >
                            Evaluations IA
                        </Button>
                    </Grid>
                </Grid>
                
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
                {data.summary}
                </Typography>

            </Grid>
        </Grid>
    )
}