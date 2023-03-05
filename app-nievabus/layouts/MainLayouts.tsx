import { Footer } from '@/components/commons';
import React, { FC } from 'react'
import { NavBar } from '../components/commons/admin';

interface Props {
    children: any;
}
export const MainLayouts:FC<Props> = ({children}) => {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <main style={{
            margin: '50px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
        <footer style={{
            	position: 'fixed',
                width: '100%',
                height: '50px',
                bottom: '0'
        }}>
            {/* <h2>Footer de la página</h2> */}
            <Footer />
        </footer>
    </>
  )
}