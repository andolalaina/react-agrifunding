import { Paper } from "@mui/material"
import { countLendingProjects, getLendingProjects } from "../../../domain/services/lendingProject.service";
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { formatCurrency, formatDate, formatStatus } from "../../../utils/formatter";
import { Map } from "../../components/Map";

const mockGeojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            46.881905308040615,
            -18.510117969785895
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            48.06349975662434,
            -19.302614422308693
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            46.99516098337591,
            -19.644449801260663
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            47.98871095178447,
            -18.187944117630252
          ],
          "type": "Point"
        }
      }
    ]
  }

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
        { field: 'owner', headerName: 'Porteur du projet', width: 130, valueGetter: (v: any) => v.name},
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'submissionDate', headerName: 'Date de création', valueFormatter: formatDate, width: 130 },
        { field: 'targetDate', headerName: 'Fin du financement', valueFormatter: formatDate, width: 130 },
        { field: 'fundTarget', headerName: 'Objectif de financement', valueFormatter: formatCurrency, width: 130 },
        { field: 'fundActual', headerName: 'Financement actuel', valueFormatter: formatCurrency, width: 130 },
        { field: 'status', headerName: 'Etat', width: 130, valueFormatter: formatStatus }
    ];

    return (
        <>
        <h2>Tableau de bord</h2>
            <Paper sx={{ width: '100%' }}>
                <Map 
                    center={[-20.1, 46.5]}
                    zoom={8}
                    markerPopup="Plantation de Maïs dans la région Vakinankaratra"
                    geojsonLayer={mockGeojson}
                    height="500px"
                />
                <h4>Liste de mes projets</h4>
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