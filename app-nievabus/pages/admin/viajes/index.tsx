import { useViajes } from '@/hooks/useViajes';
import { MainLayouts } from '@/layouts';

const IndexViajesPage = () => {

  const { viajes, isLoading } = useViajes ('/viajes')

  console.log(isLoading, "c=", viajes)
  return (
    <MainLayouts>
        <div>Viajes admin</div>
    </MainLayouts>
    
  )
}

export default IndexViajesPage