import { useAutobuses } from '@/hooks/useAutobuses';
import { MainLayouts } from '@/layouts';

const IndexAutobusesPage = () => {

  const { autobuses, isLoading } = useAutobuses ('/autobuses')

  console.log(isLoading, "c=", autobuses)
  return (
    <MainLayouts>
        <div>Autobuses admin</div>
    </MainLayouts>
    
  )
}

export default IndexAutobusesPage