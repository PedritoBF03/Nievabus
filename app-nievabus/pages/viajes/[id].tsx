import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";
import { useViajes } from '../../hooks/useViajes';
import { IViajes } from '../../interfaces/viajes/IViajes';
import { LogoutViajesDetail } from "@/components/viajes";


interface Props {
    referencia: string
}

const LibroPage = () => {
    const router = useRouter();
    console.log(router);
   
    const referencia = router.query;
    // renombrando la variable viajes por viajes
    const { viajes:viajes, isLoading } = useViajes(`/viajes/${referencia.id}`);
    console.log(viajes)
  return (
    <PublicLayouts> 
       <h2>Detalle del viaje {`${router.query.id}`} </h2>
        <LogoutViajesDetail viajes={viajes} />
        
    </PublicLayouts>
    
  )
}

export default LibroPage
