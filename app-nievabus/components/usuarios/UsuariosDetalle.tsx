import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IUsuarios } from '@/interfaces/usuarios';

import { AuthContext } from "@/context";
import { useContext } from "react";

interface Props {
    usuarios: IUsuarios[]
}
export const UsuariosDetalle:FC<Props> = ({usuarios}) => {

  const { user } =  useContext(AuthContext); 
  console.log('usuario: ', user);
  
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
                  
                  <table>
                    <tr>
                      <td><b>Nombre Completo:</b> </td>
                      <td>{ user?.fullName }</td>
                    </tr>

                    <br/>

                    <tr>
                      <td><b>Email:</b> </td>
                      <td>{ user?.email }</td>
                    </tr>

                    <br/>

                    <tr>
                      <td><b>Rol de la cuenta:</b> </td>
                      <td>{ user?.roles }</td>
                    </tr>

                    <br/>


                    <tr>
                      <td><b>Contraseña actual de la cuenta:</b></td>
                      <td>{ user?.password }</td>
                    </tr>
                  </table>

               </Grid>
            </Grid>
  )
}