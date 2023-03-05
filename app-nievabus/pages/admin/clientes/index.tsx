import { useClientes } from '@/hooks/useClientes';
import { MainLayouts } from '@/layouts';

const IndexClientesPage = () => {

  const { clientes, isLoading } = useClientes ('/clientes')

  console.log(isLoading, "c=", clientes)
  return (
    <MainLayouts>
        <div>Clientes admin</div>
    </MainLayouts>
    
  )
}

export default IndexClientesPage