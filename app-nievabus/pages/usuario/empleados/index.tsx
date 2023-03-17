import { useEmpleados } from '@/hooks/useEmpleados'
import { PublicLayouts } from '@/layouts'
import React from 'react'

const IndexEmpleadosPage = () => {
  const { empleados, isLoading } = useEmpleados ('/empleados')
  console.log(isLoading, "c=", empleados)
  return (
    <PublicLayouts>
        <div>Empleados</div>
    </PublicLayouts>
  )
}

export default IndexEmpleadosPage