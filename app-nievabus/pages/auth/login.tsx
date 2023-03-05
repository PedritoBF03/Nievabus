import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';
import { AuthLayout } from '../../layouts';

const indexLoginPage = () => {
  return (
    <AuthLayout title={"Ingresar"}>
        <Box sx={{ width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' component='h3' textAlign={'center'} color={'red'}>Iniciar Sesión</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Correo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Contraseña" type="password" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        <Link href='/admin' passHref component={NextLink} underline='always'>
                            Ingresar
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <Link href='/auth/register' passHref component={NextLink} underline='always'>
                        ¿ No tienes cuenta ... ?
                    </Link>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default indexLoginPage



