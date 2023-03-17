import { UsuariosDetalle } from '@/components/usuarios';
import { useUsuarios } from '@/hooks/useUsuarios';
import { UserLayouts } from '@/layouts';

const IndexUsuariosPage = () => {

  const { usuarios, isLoading } = useUsuarios ('/usuarios')

  console.log(isLoading, "c=", usuarios)
  return (
    <UserLayouts>
        <div>Usuarios</div>

        <UsuariosDetalle usuarios = {usuarios} />

    </UserLayouts>
    
  )
}

export default IndexUsuariosPage