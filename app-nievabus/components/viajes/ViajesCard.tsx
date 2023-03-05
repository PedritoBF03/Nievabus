import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IViajes } from "../../interfaces/viajes";
import NextLink  from 'next/link';

interface Props {
  viajes: IViajes;
}
export const ViajesCard:FC<Props> = ({ viajes }) => {
  return (
    <Grid item  xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/viajes/${viajes.referencia}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ viajes.imagen } alt={ viajes.destino } 
                        sx={{ width:'90px', height: '150px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                    <Typography fontWeight={700}>{viajes.precio} €</Typography>
                        
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
          <Typography fontWeight={500}>Viaje de</Typography>
          <Typography fontWeight={700}>{viajes.origen} - {viajes.destino}</Typography>
        </Box>
    </Grid>
  )
}