import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { ProjectListItemDTO } from "../../../domain/dto/project.dto";
import { ProjectItemContent } from "./project-item-content";


type Props = {
    data: ProjectListItemDTO
}

export const ProjectItem = ({ data } : Props) => {
    return (
    <Card sx={{ margin: "1rem auto", maxWidth: "50vw" }}>
      <CardContent>
        <ProjectItemContent data={data} />
      </CardContent>
      <CardActions>
        <Button size="small"> <Link to={data.id}>Voir les détails</Link></Button>
      </CardActions>
    </Card>
    )
}