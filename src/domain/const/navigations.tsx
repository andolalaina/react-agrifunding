import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TableRowsIcon from '@mui/icons-material/TableRows';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { texts } from './slugs';


const _texts = texts["FR"]

 export const navigations = [
    {
        id: "dashboard",
        title: _texts.navigations["dashboard"],
        url: "/",
        resource: "dashboard",
        icon: () => <SpaceDashboardIcon />
    },
    {
        id: "all-projects",
        title: _texts.navigations["all-projects"],
        url: "/projects",
        resource: "projects.read",
        icon: () => <TableRowsIcon />
    },
    {
        id: "submit-project",
        title: _texts.navigations["submit-project"],
        url: "/submit-project",
        resource: "projects.create",
        icon: () => <NoteAddIcon />
    },
    {
        id: "setting",
        title: _texts.navigations["setting"],
        url: "/settings",
        resource: "settings.crud",
        icon: () => <SettingsApplicationsIcon />
    },
]