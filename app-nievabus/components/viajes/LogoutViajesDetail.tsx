import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, useContext } from 'react'
import { IViajes } from '../../interfaces/viajes/IViajes';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { AuthContext } from '../../context';

interface Props {
    viajes: IViajes
}

const myLoader = ({src, width, quality}:any) =>{
  // return `https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/`
  return `${src}?s=${width}`
}
export const LogoutViajesDetail:FC<Props> = ({viajes}) => {
    console.log(viajes);
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    // const { user } =  useContext(AuthContext); 

    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} sx={{ border:0, width:'100%' }} >
        <Box display='flex' flexDirection='row'  >
          <Image
            loader={myLoader}
            src= {viajes.imagen}
            alt={viajes.destino}
            width={300}
            height={300}
          />
          <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
            <Typography variant='h5' component='h5'
                        sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
            > { viajes.destino}</Typography>
            <Box display='flex' flexDirection='row' >
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Referencia </Typography>
              <Typography sx={{width: '60%'}}> {viajes.referencia} </Typography>
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Viaje desde: </Typography>
              <Typography sx={{width: '60%'}}> {viajes.origen} </Typography>
              {/* { user?.email} */}
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Hasta: </Typography>
              <Typography sx={{width: '60%'}}> {viajes.destino} </Typography>
            </Box>
          </Box>
          <Box  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
            <Typography variant='h4' component='h4'> { viajes.precio } € </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Descripcion" value="1" />
                <Tab label="Hora Salida" value="2" />
                <Tab label="Referencia" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{viajes.descripcion}</TabPanel>
            <TabPanel value="2">{viajes.hora_inicio}</TabPanel>
            <TabPanel value="3">{viajes.referencia}</TabPanel>
          </TabContext>
        </Box>
        {/* <Box sx={{ width: '100%' }}>
              <Typography  variant='subtitle1' > Sinpsis </Typography>
              <Typography> {libro.shortDescription} </Typography>
        </Box> */}


      </Grid>
    </Grid>

  )
}