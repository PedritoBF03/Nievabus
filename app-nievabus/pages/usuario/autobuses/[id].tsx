import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, UserLayouts } from "../../../layouts";
import { IAutobuses } from '../../../interfaces/autobuses/IAutobuses';
import { AutobusesDetail } from "@/components/autobuses/AutobusesDetail";
import { useAutobuses } from "@/hooks/useAutobuses";


interface Props {
    matricula: string
}

const LibroPage = () => {
    const router = useRouter();
    console.log(router);
   
    const matricula = router.query;
    // renombrando la variable autobuses por autobuses
    const { autobuses:autobuses, isLoading } = useAutobuses(`/usuario/autobuses/${matricula.id}`);
    console.log(autobuses)
  return (
    <UserLayouts> 
       <h2>Detalle del autobus {`${router.query.id}`} </h2>
        <AutobusesDetail autobuses={autobuses} />
        
    </UserLayouts>
    
  )
}

export default LibroPage
