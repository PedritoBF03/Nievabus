import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, useContext } from 'react'
import { IAutobuses } from '../../interfaces/autobuses/IAutobuses';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { AuthContext } from '../../context';

interface Props {
    autobuses: IAutobuses
}

const myLoader = ({src, width, quality}:any) =>{
  // return `https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/`
  return `${src}?s=${width}`
}
export const LogoutAutobusesDetail:FC<Props> = ({autobuses}) => {
    console.log(autobuses);
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
            src= {autobuses.imagen}
            alt={autobuses.carroceria}
            width={300}
            height={300}
          />
          
          <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
            {/* <Typography variant='h5' component='h5'
                        sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
            > { autobuses.motor}</Typography> */}
            <Box display='flex' flexDirection='row' >
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Carroceria:  </Typography>
              <Typography sx={{width: '60%'}}> {autobuses.carroceria} </Typography>
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Motor: </Typography>
              <Typography sx={{width: '60%'}}> {autobuses.motor} </Typography>
              {/* { user?.email} */}
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Plazas: </Typography>
              <Typography sx={{width: '60%'}}> {autobuses.plazas} </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Descripcion" value="1" />
                <Tab label="Carroceria y motor" value="2" />
                <Tab label="Matricula" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{autobuses.carroceria} {autobuses.motor}, con matricula {autobuses.matricula}, este autobus cuenta con una cantidad de  {autobuses.plazas}  plazas para pasajeros.</TabPanel>
            <TabPanel value="2">{autobuses.carroceria} {autobuses.motor}</TabPanel>
            <TabPanel value="3">La matricula del autobus es: {autobuses.matricula}</TabPanel>
          </TabContext>
        </Box>


      </Grid>
    </Grid>

  )
}






// import { Box, Button, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import React, { FC, useContext } from 'react'
// import { IAutobuses } from '../../interfaces/autobuses/IAutobuses';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// // import { AuthContext } from '../../context';

// interface Props {
//     autobuses: IAutobuses
// }

// const myLoader = ({src, width, quality}:any) =>{
//   // return `https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/`
//   return `${src}?s=${width}`
// }
// export const AutobusesDetail:FC<Props> = ({autobuses}) => {
//     console.log(autobuses);
//     const [value, setValue] = React.useState('1');

//     const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//       setValue(newValue);
//     };
//     // const { user } =  useContext(AuthContext); 
    
//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12} sm={12} sx={{ border:0, width:'100%' }} >
//         <Box display='flex' flexDirection='row'  >
//         <Image
//             loader={myLoader}
//             src= {autobuses.imagen}
//             alt={autobuses.motor}
//             width={300}
//             height={300}
//           />
//           <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
//             <Typography variant='h5' component='h5'
//                         sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
//             > { autobuses.carroceria}</Typography>
//             <Box display='flex' flexDirection='row' >
//               <Typography sx={{width: '40%'}}  variant='subtitle1' > Matricula </Typography>
//               <Typography sx={{width: '60%'}}> {autobuses.motor} </Typography>
//             </Box>
//             <Box display='flex' flexDirection='row'>
//               <Typography sx={{width: '40%'}}  variant='subtitle1' > Carroceria: </Typography>
//               <Typography sx={{width: '60%'}}> {autobuses.plazas} </Typography>
//               {/* { user?.email} */}
//             </Box>
//             <Box display='flex' flexDirection='row'>
//               <Typography sx={{width: '40%'}}  variant='subtitle1' > Motor: </Typography>
//               <Typography sx={{width: '60%'}}> {autobuses.motor} </Typography>
//             </Box>
//             <Box display='flex' flexDirection='row'>
//               <Typography sx={{width: '40%'}}  variant='subtitle1' > Numero de Plazas: </Typography>
//               <Typography sx={{width: '60%'}}> {autobuses.plazas} </Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Box sx={{ width: '100%', typography: 'body1' }}>
//           <TabContext value={value}>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//               <TabList onChange={handleChange} aria-label="lab API tabs example">
//                 <Tab label="Descripcion" value="1" />
//                 <Tab label="Hora Salida" value="2" />
//                 <Tab label="Referencia" value="3" />
//               </TabList>
//             </Box>
//             <TabPanel value="1">{autobuses.motor}</TabPanel>
//             <TabPanel value="2">{autobuses.motor}</TabPanel>
//             <TabPanel value="3">{autobuses.motor}</TabPanel>
//           </TabContext>
//         </Box>
//         {/* <Box sx={{ width: '100%' }}>
//               <Typography  variant='subtitle1' > Sinpsis </Typography>
//               <Typography> {libro.shortDescription} </Typography>
//         </Box> */}


//       </Grid>
//     </Grid>

//   )
// }