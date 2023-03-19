import { IAutobuses } from "@/interfaces/autobuses";
import { Grid } from "@mui/material";
import { FC } from "react"
import { LogoutAutobusesCard } from ".";


interface Props {
    autobuses: IAutobuses[]
}
export const LogoutAutobusesCardList:FC<Props> = ({ autobuses }) => {
  return (
    <Grid container spacing={4}>
      {
        autobuses.map( (autobuses ) => (
          <LogoutAutobusesCard 
            autobuses = { autobuses }
            key = { autobuses.matricula }
          />
        ))
      }

    </Grid>
  )
}