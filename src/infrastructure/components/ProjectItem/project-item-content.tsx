import { Box, Button, CircularProgress, LinearProgress, Rating, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { formatCurrency, formatDate } from "../../../utils/formatter";
import { ProjectListItemDTO } from "../../../domain/dto/project.dto";
import ReportModal from "./project-item-report";
import { useState } from "react";
import { getProjectRecommandations } from "../../../domain/services/lendingProject.service";

type Props = {
    data: ProjectListItemDTO
}

export const ProjectItemContent = ({ data } : Props) => {
    const [open, setOpen] = useState(false);
    const [recommandations, setRecommandations] = useState<any>(undefined)
    const [loading, setLoading] = useState(false)

    const handleAIOpen = () => {
        setLoading(true)
        getProjectRecommandations(data.id).then((recData) => {
            setRecommandations({
                title: data.title,
                spei: recData.drought_data_interpretation,
                accessibility: recData.zone_accessibility_interpretation,
                recommendations: recData.agricultural_advices,
                score: recData.pertinence.note,
                scoreComment: recData.pertinence.comment
            })
            setOpen(true)
            setLoading(false)
        })
    }

    return (
        <Grid container>
            {recommandations !== undefined && (<ReportModal open={open} handleClose={() => setOpen(false)} data={recommandations} />)}
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
                            onClick={() => handleAIOpen()}
                        >
                            {loading ? <CircularProgress size="20px"/> : "Evaluations IA"}
                        </Button>
                    </Grid>
                </Grid>
                
                <Box sx={{ marginBottom: "1rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                        <PersonIcon fontSize="small" sx={{ marginRight: ".3rem" }}/>
                        <Typography variant="caption">{data.owner_name} - {data.owner_job}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}>
                        <CalendarTodayIcon fontSize="small" sx={{ marginRight: ".3rem" }} />
                        <Typography variant="caption" sx={{ verticalAlign: "bottom" }}>{ formatDate(data.submission_date) }</Typography>
                    </Box>
                </Box>
                <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="caption">
                        { formatCurrency(data.fund_actual) } sur { formatCurrency(data.fund_target) }
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