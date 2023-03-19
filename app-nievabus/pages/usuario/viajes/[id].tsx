import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts, UserLayouts } from "../../../layouts";
import { useViajes } from '../../../hooks/useViajes';
import { IViajes } from '../../../interfaces/viajes/IViajes';
import { ViajesDetail } from "@/components/viajes/ViajesDetail";


interface Props {
    referencia: string
}

const LibroPage = () => {
    const router = useRouter();
    console.log(router);
   
    const referencia = router.query;
    // renombrando la variable viajes por viajes
    const { viajes:viajes, isLoading } = useViajes(`/usuario/viajes/${referencia.id}`);
    console.log(viajes)
  return (
    <UserLayouts> 
       <h2>Detalle del viaje {`${router.query.id}`} </h2>
        <ViajesDetail viajes={viajes} />
        
    </UserLayouts>
    
  )
}

export default LibroPage
