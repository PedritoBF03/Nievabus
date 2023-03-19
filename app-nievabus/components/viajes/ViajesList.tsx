import { Box, Grid, Link } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { IViajes } from '../../interfaces/viajes/IViajes';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
interface Props {
    viajes: IViajes[]
}
export const ViajesList:FC<Props> = ({viajes}) => {
  
  const colums: GridColDef[] = [
        { field: 'referencia', headerName: 'referencia', width: 130},
        { field: 'precio', headerName:'precio', width: 300 },
        { field: 'origen', headerName: 'origen', width: 100 },
        { field: 'destino', headerName: 'destino', width: 100 },
        { field: 'descripcion', headerName: 'descripcion', width: 100 },
        { field: 'hora_inicio', headerName: 'hora_inicio', width: 100 },
        { field: 'ida_vuelta', headerName: 'ida_vuelta', width: 100 },
        { field: 'descripcion', headerName: 'descripcion', width: 100 },
        { field: 'imagen', headerName: 'imagen', width: 100 }
  ];
  const rows = viajes;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <Link href="/admin/viajes/insertar"><AddBoxIcon sx={{  color: 'green', fontSize:40 }} /></Link>
              </Box>
               
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    // pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    // rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: IViajes ) => row.referencia}
                  />
               </Grid>
            </Grid>
  )
}