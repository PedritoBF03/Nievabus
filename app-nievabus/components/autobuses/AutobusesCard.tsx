import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IAutobuses } from "../../interfaces/autobuses";
import NextLink  from 'next/link';

interface Props {
  autobuses: IAutobuses;
}
export const AutobusesCard:FC<Props> = ({ autobuses }) => {
  return (
    <Grid item  xs= {6} sm={3}>

        <Card sx={{ width: '90%' }}>
          <Link href={`/autobuses/${autobuses.matricula}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ autobuses.imagen } alt={ autobuses.carroceria } 
                        sx={{ width:'90px', height: '150px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                    {/* <Typography fontWeight={700}>{autobuses.motor}</Typography> */}

                      <Typography fontWeight={500}> <u>Marca y modelo</u></Typography>
                      <Typography fontWeight={700}>{autobuses.carroceria} - {autobuses.motor}</Typography>
                      <Typography fontWeight={500}></Typography>
                      <Typography fontWeight={500}>Numero de plazas: {autobuses.plazas}</Typography>
                      {/* <Typography fontWeight={700}>{autobuses.plazas}</Typography> */}
                    
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>

        {/* <Box sx= {{ marginTop: 1}} className='fadeIn'>
          <Typography fontWeight={500}>Marca y modelo</Typography>
          <Typography fontWeight={700}>{autobuses.carroceria} - {autobuses.motor}</Typography>
          <Typography fontWeight={500}></Typography>
          <Typography fontWeight={500}>Numero de plazas</Typography>
          <Typography fontWeight={700}>{autobuses.plazas}</Typography>
        </Box> */}
    </Grid>
  )
}