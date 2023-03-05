import { useUsuarios } from '@/hooks/useUsuarios';
import { MainLayouts } from '@/layouts';

const IndexUsuariosPage = () => {

  const { usuarios, isLoading } = useUsuarios ('/usuarios')

  console.log(isLoading, "c=", usuarios)
  return (
    <MainLayouts>
        <div>Usuarios admin</div>
    </MainLayouts>
    
  )
}

export default IndexUsuariosPage