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
    

    <table>

  <tr>

    <td>{ user?.fullName }</td>

    <td>Celda 2</td>

    <td>Celda 3</td>

  </tr>

  <tr>

    <td>Celda 4</td>

    <td>Celda 5</td>

    <td>Celda 6</td>

  </tr>

</table>

            
  )
}