import { ViajesList } from '@/components/viajes/ViajesList';
import { useViajes } from '@/hooks/useViajes';
import { MainLayouts } from '@/layouts';

const IndexViajesPage = () => {

  const { viajes, isLoading } = useViajes ('/viajes')

  console.log(isLoading, "c=", viajes)
  return (
    <MainLayouts>
      
      <h2>Sección de Viajes Admin</h2>
      <ViajesList viajes = {viajes} />
            {/* {
                (isLoading)
                    ? <ViajesList viajes = {viajes} />
                    : <Mundo />
            } */}

    </MainLayouts>
    
  )
}

export default IndexViajesPage