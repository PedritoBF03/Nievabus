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
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
          <Typography fontWeight={500}>Marca y modelo</Typography>
          <Typography fontWeight={700}>{autobuses.marca} - {autobuses.modelo}</Typography>
          <Typography fontWeight={500}></Typography>
          <Typography fontWeight={500}>Numero de plazas</Typography>
          <Typography fontWeight={700}>{autobuses.plazas}</Typography>
        </Box>
    </Grid>
  )
}