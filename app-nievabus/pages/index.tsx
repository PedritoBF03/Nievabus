/* eslint-disable react-hooks/rules-of-hooks */
import { PublicLayouts } from '../layouts/PublicLayouts';
import { NextPage } from "next"
import { Box, Button, Container, Tab } from '@mui/material';
import { useClientes } from '../hooks/useClientes';
import { useViajes } from '@/hooks/useViajes';
import { useAutobuses } from '@/hooks/useAutobuses';
import { useEmpleados } from '@/hooks/useEmpleados';
import { useUsuarios } from '@/hooks/useUsuarios';
import { TabContext, TabList, TabPanel } from '@mui/lab';


const indexPage: NextPage = () => {

  // const { clientes, isLoading } = useClientes ('/clientes')
  // const { viajes, isLoading } = useViajes ('/viajes')
  // const { autobuses, isLoading } = useAutobuses ('/autobuses')
  // const { empleados, isLoading } = useEmpleados ('/empleados')
  // const { usuarios, isLoading } = useUsuarios ('/usuarios')

  // console.log(isLoading, "c=", clientes)
  // console.log(isLoading, "c=", viajes)
  // console.log(isLoading, "c=", autobuses)
  // console.log(isLoading, "c=", empleados)
  // console.log(isLoading, "c=", usuarios)

  return (

    <PublicLayouts>
      
      <Button
        sx={{ backgroundColor: 'red' }} variant='contained' href="http://www.nievabus.com/home.html">
          Nievabus
      </Button>
      
        <Container maxWidth="sm">

            <Box display='flex' flexDirection='column'>
              <h1>Sobre nosotros</h1>

              <h3>NIEVABUS, S.L. empresa dedicada al Transporte de Viajeros por Carretera, asentada en Huercal-Overa en la provincia de Almería, con mas de 30 años de  experiencia, presta  servicios de calidad en Servicios Discrecionales y Transporte Escolar.</h3>

              <h1>Politica de privacidad</h1>

              <h3>
                Esta página web es propiedad de NIEVABUS, S.L., y tiene carácter meramente informativo sobre los servicios que presta nuestra empresa, El hecho de acceder a esta página implica el conocimiento y aceptación de los términos y condiciones de uso.
                Todos los derechos de propiedad intelectual del contenido de esta página web y su diseño gráfico, son propiedad exclusiva de NIEVABUS, S.L., y es a quien corresponde el ejercicio exclusivo de los derechos de explotación de los mismos, Así queda prohibida su reproducción, distribución, comunicación pública y modificación total o parcial sin previa autorización expresa de NIEVABUS, S.L. De igual forma, todos los signos distintivos, marcas, nombres comerciales o signos de cualquier clase de contenidos en esta página web están protegidos por ley.
                NIEVABUS, S.L, se reserva el derecho de actualizar, modificar o eliminar la información contenida en esta página web y su configuración o presentación, en cualquier momento, sin previo aviso y sin asumir ningún tipo de responsabilidad por hacerlo.
                NIEVABUS, S.L., no asume responsabilidad alguna derivada de problemas técnicos, o fallos en los equipos informáticos, que se produzcan durante la conexión, a internet, o que puedan ser originados por terceras personal mediante intromisiones ilegitimas fuera de su control.
                Desde NIEVABUS, S.L, no se garantiza la ausencia de virus y otros elementos que puedan causar daños en los sistemas informáticos, los documentos electrónicos o los ficheros de usuarios de esta página web o de páginas web de terceros, y no se responsabiliza de los daños y perjuicios que puedan llegar a producir por estos motivos, De igual forma no se responsabiliza ante posibles daños y perjuicios que puedan afectar al usuario como consecuencia de errores, defectos y omisiones en la información de terceras personas.
                Así mismo la aceptación en el envió de Email, el contactante acepta la inclusión de sus datos en los ficheros correspondientes para poder ejercer posibles acciones comerciales, según, la L.O.P.D., a los que podrá realizar sus acciones de acceso, rectificación y anulación en la correspondiente dirección : NIEVABUS, S.L.,  Cl. Santa Maria de Nieva, los Cayetanos, 18 - 04600 - Huércal-Overa ( Almería ).
              </h3>

            </Box>

        </Container>
  
    </PublicLayouts>

  )
}

export default indexPage