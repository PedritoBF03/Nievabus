import { ViajesCardList } from '@/components/viajes';
import { useViajes } from '@/hooks/useViajes';
import { UserLayouts } from '@/layouts';

const IndexViajesPage = () => {
  const { viajes, isLoading } = useViajes ('/viajes')
  console.log(isLoading, "c=", viajes)
  
  return (
    <UserLayouts>
        <div>Viajes usuario</div>
        <ViajesCardList viajes = {viajes}/>
    </UserLayouts>
    
  )
}

export default IndexViajesPage