import { Grid } from "@mui/material";
import { FC } from "react"
import { LogoutViajesCard } from ".";
import { IViajes } from "../../interfaces/viajes";

interface Props {
    viajes: IViajes[]
}
export const LogoutViajesCardList:FC<Props> = ({ viajes }) => {
  return (
    <Grid container spacing={4}>
      {
        viajes.map( (viajes ) => (
          <LogoutViajesCard 
            viajes = { viajes }
            key = { viajes.referencia }
          />
        ))
      }

    </Grid>
  )
}