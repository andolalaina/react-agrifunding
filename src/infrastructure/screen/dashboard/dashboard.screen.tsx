import { Paper } from "@mui/material"
import { countLendingProjects, getLendingProjects } from "../../../domain/services/lendingProject.service";
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { formatCurrency, formatDate } from "../../../utils/formatter";

export const DashboardScreen = () => {
    const [ paginationModel, setPaginationModel ] = useState<GridPaginationModel>({page: 1, pageSize: 2});
    const [ rows, setRows ] = useState(getLendingProjects(paginationModel.page, paginationModel.pageSize));
    const rowsCount = countLendingProjects();

    useEffect(() => {
        setRows(getLendingProjects(paginationModel.page, paginationModel.pageSize))
    }, [paginationModel])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'title', headerName: 'Nom du projet', width: 130 },
        { field: 'owner', headerName: 'Porteur du projet', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'submissionDate', headerName: 'Date de création', valueFormatter: formatDate, width: 130 },
        { field: 'targetDate', headerName: 'Fin du financement', valueFormatter: formatDate, width: 130 },
        { field: 'fundTarget', headerName: 'Objectif de financement', valueFormatter: formatCurrency, width: 130 },
        { field: 'fundActual', headerName: 'Financement actuel', valueFormatter: formatCurrency, width: 130 },
        { field: 'status', headerName: 'Etat', width: 130 }
    ];

    return (
        <>
        <h2>Tableau de bord</h2>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    onPaginationModelChange={setPaginationModel}
                    paginationMode="server"
                    rowCount={rowsCount}
                    pageSizeOptions={[1, 2, 5]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    )
}