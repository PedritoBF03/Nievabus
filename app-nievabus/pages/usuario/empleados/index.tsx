import { useEmpleados } from '@/hooks/useEmpleados'
import { UserLayouts } from '@/layouts'
import React from 'react'

const IndexEmpleadosPage = () => {
  const { empleados, isLoading } = useEmpleados ('/usuario/empleados')
  console.log(isLoading, "c=", empleados)
  return (
    <UserLayouts>
        <div>Empleados</div>
    </UserLayouts>
  )
}

export default IndexEmpleadosPage