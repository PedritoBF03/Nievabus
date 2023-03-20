import { Email, ErrorOutline, ErrorSharp } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLayout, MainLayouts } from '../../../layouts';
import { validations } from '../../../utils';
import nievabusApi from '../../../api/NievabusApi';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../context/auth/AuthContext';
import Cookies from 'js-cookie';

type ViajeData = {
    descripcion: string, 
    destino: string, 
    hora_inicio: string, 
    ida_vuelta: string, 
    imagen: string, 
    origen: string, 
    precio: string, 
    referencia: string
    dniCliente: string, 
    dniEmpleado: string
};


const IngersarPage = () => {
  const router = useRouter();
  //hook
  const { registerViaje } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm<ViajeData>();

  const [ showError, setShowError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  //manejador del evento submit del formulario
  const onRegisterViaje = async ( InputData: ViajeData) => {
    // console.log(InputData);
    
    // setShowError(false);
    const { descripcion, destino, hora_inicio, ida_vuelta, imagen, origen, precio, referencia, dniCliente, dniEmpleado} = InputData;
    const {hasError, message } = await registerViaje(descripcion, destino, hora_inicio, ida_vuelta, imagen, origen, precio, referencia, dniCliente, dniEmpleado)
    console.log(hasError, message )

    // if (hasError){
    //     setShowError(true);
    //     setErrorMessage(message || '');
    //     setTimeout( () => setShowError(false), 3000);
    //     return;
    // }

    // router.replace('/admin');
   
  }

  return (
    <MainLayouts>
       <form onSubmit={ handleSubmit(onRegisterViaje)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' component='h1'>Crear Viaje</Typography>
                    <Chip 
                                label="No se reconoce viaje"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                </Grid>
                <Grid item xs={12} >
                    <TextField 
                        { ...register('descripcion', {
                            required: 'Descripcion obligatorio'
                        })}
                        error= { !!errors.descripcion}
                        helperText = { errors.descripcion?.message }
                        label="Descripcion" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('destino', {
                            required: 'destino obligatorio'
                        })}
                        error= { !!errors.destino}
                        helperText = { errors.destino?.message }
                        label="Destino" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('hora_inicio', {
                            required: 'Hora Inicio requerido'
                        })}
                        error= { !!errors.hora_inicio}
                        helperText = { errors.hora_inicio?.message }
                        label="Hora inicio" variant='filled' fullWidth />
                </Grid>


                <Grid item xs={12}>
                    <TextField 
                        { ...register('ida_vuelta', {
                            required: 'Ida vuelta requerido'
                        })}
                        error= { !!errors.ida_vuelta}
                        helperText = { errors.ida_vuelta?.message }
                        label="Ida vuelta" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('imagen', {
                            required: 'Imagen requerido'
                        })}
                        error= { !!errors.imagen}
                        helperText = { errors.imagen?.message }
                        label="Imagen" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('origen', {
                            required: 'Origen requerido'
                        })}
                        error= { !!errors.origen}
                        helperText = { errors.origen?.message }
                        label="Origen" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('precio', {
                            required: 'Precio requerido'
                        })}
                        error= { !!errors.precio}
                        helperText = { errors.precio?.message }
                        label="Precio" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('referencia', {
                            required: 'Referencia requerido'
                        })}
                        error= { !!errors.referencia}
                        helperText = { errors.referencia?.message }
                        label="Referencia" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('dniCliente', {
                            required: 'DNI Cliente requerido'
                        })}
                        error= { !!errors.dniCliente}
                        helperText = { errors.dniCliente?.message }
                        label="DNI Cliente" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('dniEmpleado', {
                            required: 'DNI Empleado requerido'
                        })}
                        error= { !!errors.dniEmpleado}
                        helperText = { errors.dniEmpleado?.message }
                        label="DNI Empleado" variant='filled' fullWidth />
                </Grid>


                <Grid item xs={12}>
                    <Button 
                        type="submit" color='secondary' className='circular-btn' size='large' fullWidth>
                        Ingresar viaje
                    </Button>
                </Grid>
            </Grid>
        </Box>
      </form>
    </MainLayouts>
  )
}

export default IngersarPage
