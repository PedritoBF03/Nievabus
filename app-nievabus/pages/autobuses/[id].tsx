import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";
import { IAutobuses } from '../../interfaces/autobuses/IAutobuses';
import { AutobusesDetail } from "@/components/autobuses/AutobusesDetail";
import { useAutobuses } from "@/hooks/useAutobuses";
import { LogoutAutobusesDetail } from "@/components/autobuses";


interface Props {
    matricula: string
}

const LibroPage = () => {
    const router = useRouter();
    console.log(router);
   
    const matricula = router.query;
    // renombrando la variable autobuses por autobuses
    const { autobuses:autobuses, isLoading } = useAutobuses(`/autobuses/${matricula.id}`);
    console.log(autobuses)
  return (
    <PublicLayouts> 
       <h2>Detalle del autobus {`${router.query.id}`} </h2>
        <LogoutAutobusesDetail autobuses={autobuses} />
        
    </PublicLayouts>
    
  )
}

export default LibroPage
