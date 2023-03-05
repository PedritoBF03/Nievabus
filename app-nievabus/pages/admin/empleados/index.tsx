import { useEmpleados } from '@/hooks/useEmpleados';
import { MainLayouts } from '@/layouts';

const IndexEmpleadosPage = () => {

  const { empleados, isLoading } = useEmpleados ('/empleados')

  console.log(isLoading, "c=", empleados)
  return (
    <MainLayouts>
        <div>Empleados admin</div>
    </MainLayouts>
    
  )
}

export default IndexEmpleadosPage