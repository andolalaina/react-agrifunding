import { Route, Routes } from "react-router"
import { AppScreen } from "../screen/home/app.screen"
import { BrowserRouter } from "react-router-dom"
import { DashboardScreen } from "../screen/dashboard/dashboard.screen"
import { ProjectListScreen } from "../screen/project/project-list.screen"
import { SettingScreen } from "../screen/setting/setting.screen"
import { SubmitProjectScreen } from "../screen/project/project-add.screen"
import { ProjectDetail } from "../components/ProjectItem/project-detail"


export const MainRoutes = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<AppScreen />}>
                    <Route path="" element={<DashboardScreen />}></Route>
                    <Route path="projects" element={<ProjectListScreen />}></Route>
                    <Route path="projects/:id" element={<ProjectDetail />}></Route>
                    <Route path="submit-project" element={<SubmitProjectScreen />}></Route>
                    <Route path="settings" element={<SettingScreen />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}