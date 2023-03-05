import { IAutobuses } from "@/interfaces/autobuses";
import { Grid } from "@mui/material";
import { FC } from "react"
import { AutobusesCard } from ".";


interface Props {
    autobuses: IAutobuses[]
}
export const AutobusesCardList:FC<Props> = ({ autobuses }) => {
  return (
    <Grid container spacing={4}>
      {
        autobuses.map( (autobuses ) => (
          <AutobusesCard 
            autobuses = { autobuses }
            key = { autobuses.matricula }
          />
        ))
      }

    </Grid>
  )
}