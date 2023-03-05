import { Box, Button, Link, Typography } from "@mui/material";
import Head from "next/head";
import { FC } from "react"
import NextLink from 'next/link';
import { Footer } from '@/components/commons';


interface Props {
    title: string;
    children?: any
}
export const AuthLayout:FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> { title } </title>
        </Head>
        <header>
        <Box component="nav" 
                 sx= {{ padding:'10', backgroundColor:'orange', alignItems:'center', display: { xs: 'none', sm: 'flex' }}} >
                <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
                </Link>
                <Box flex={2} />  
                    <Typography fontWeight={700}>Zona de Autenticación</Typography> 
                <Box flex={2} />   
                <Link href='/auth/register' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Registro</Button>
                </Link>
                <Box flex={1} />
                <Link href='/auth/login' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Iniciar sesion</Button>
                </Link>
                <Box flex={1} />  
        </Box>
        </header>
        <main style={{
            margin: '50px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            <Box sx={{marginLeft: 3}}>
               
            </Box>
            <Box display='flex' justifyContent={'center'} alignItems='center' height="calc(100vh - 200px)">
                { children }
            </Box>
        </main>
        <footer style={{
            	position: 'fixed',
                width: '100%',
                height: '50px',
                bottom: '0'
        }}>
            <Footer />
            {/* <h2>Footer de la página</h2> */}
        </footer>
    </>
  )
}
