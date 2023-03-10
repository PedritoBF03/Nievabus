import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IAutobuses } from '@/interfaces/autobuses';
interface Props {
    autobuses: IAutobuses[]
}
export const AutobusesList:FC<Props> = ({autobuses}) => {
  
  const colums: GridColDef[] = [
    { field: 'matricula', headerName: 'matricula', width: 130},
    { field: 'carroceria', headerName:'carroceria', width: 300 },
    { field: 'motor', headerName: 'motor', width: 100 },
    { field: 'plazas', headerName: 'plazas', width: 100 },
    { field: 'imagen', headerName: 'imagen', width: 100 }
  ];
  const rows = autobuses;
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
                    getRowId = {( row: IAutobuses ) => row.matricula}
                  />
               </Grid>
            </Grid>
  )
}