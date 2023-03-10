import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IClientes } from '@/interfaces/clientes';
interface Props {
    clientes: IClientes[]
}
export const ClientesList:FC<Props> = ({clientes}) => {
  
  const colums: GridColDef[] = [
    { field: 'dni', headerName: 'dni', width: 130},
    { field: 'name', headerName:'name', width: 300 },
    { field: 'direccion', headerName: 'direccion', width: 100 },
    { field: 'telefono', headerName: 'telefono', width: 100 },
    { field: 'usuario', headerName: 'usuario', width: 100 }
  ];
  const rows = clientes;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
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
                    getRowId = {( row: IClientes ) => row.dni}
                  />
               </Grid>
            </Grid>
  )
}