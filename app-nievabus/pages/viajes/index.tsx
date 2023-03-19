import { LogoutViajesCardList } from '@/components/viajes';
import { useViajes } from '@/hooks/useViajes';
import { PublicLayouts } from '../../layouts/PublicLayouts';

const IndexViajesPage = () => {
  const { viajes, isLoading } = useViajes ('/viajes')
  console.log(isLoading, "c=", viajes)
  
  return (
    <PublicLayouts>
        <div>Viajes</div>
        <LogoutViajesCardList viajes = {viajes}/>
    </PublicLayouts>
    
  )
}

export default IndexViajesPage