import { Grid } from "@mui/material";
import { FC } from "react"
import { ViajesCard } from ".";
import { IViajes } from "../../interfaces/viajes";

interface Props {
    viajes: IViajes[]
}
export const ViajesCardList:FC<Props> = ({ viajes }) => {
  return (
    <Grid container spacing={4}>
      {
        viajes.map( (viajes ) => (
          <ViajesCard 
            viajes = { viajes }
            key = { viajes.referencia }
          />
        ))
      }

    </Grid>
  )
}