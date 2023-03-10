import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IUsuarios } from '@/interfaces/usuarios';
interface Props {
    usuarios: IUsuarios[]
}
export const UsuariosList:FC<Props> = ({usuarios}) => {
  
  const colums: GridColDef[] = [
    { field: 'dni', headerName: 'dni', width: 130},
    { field: 'fullname', headerName:'fullname', width: 300 },
    { field: 'username', headerName: 'username', width: 100 },
    { field: 'roles', headerName: 'roles', width: 100 },
    { field: 'isActive', headerName: 'isActive', width: 100 },
    { field: 'password', headerName: 'password', width: 100 }
  ];
  const rows = usuarios;
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
                    getRowId = {( row: IUsuarios ) => row.dni}
                  />
               </Grid>
            </Grid>
  )
}