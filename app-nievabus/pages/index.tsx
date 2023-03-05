/* eslint-disable react-hooks/rules-of-hooks */
import { PublicLayouts } from '../layouts/PublicLayouts';
import { NextPage } from "next"
import { Button } from '@mui/material';
import { useClientes } from '../hooks/useClientes';
import { useViajes } from '@/hooks/useViajes';
import { useAutobuses } from '@/hooks/useAutobuses';
import { useEmpleados } from '@/hooks/useEmpleados';
import { useUsuarios } from '@/hooks/useUsuarios';


const indexPage: NextPage = () => {

  // const { clientes, isLoading } = useClientes ('/clientes')
  // const { viajes, isLoading } = useViajes ('/viajes')
  // const { autobuses, isLoading } = useAutobuses ('/autobuses')
  // const { empleados, isLoading } = useEmpleados ('/empleados')
  const { usuarios, isLoading } = useUsuarios ('/usuarios')

  // console.log(isLoading, "c=", clientes)
  // console.log(isLoading, "c=", viajes)
  // console.log(isLoading, "c=", autobuses)
  // console.log(isLoading, "c=", empleados)
  console.log(isLoading, "c=", usuarios)

  return (

    <PublicLayouts>
      <h1>App de nievabus</h1>
      <Button
        sx={{ backgroundColor: 'red' }} variant='contained'>
        NievaBus
        </Button>
    </PublicLayouts>

  )
}

export default indexPage