import { Footer, NavBar } from '@/components/commons';
import React, { FC } from 'react'

interface Props {
    children: any;
}
export const PublicLayouts:FC<Props> = ({children}) => {
  return (
    <>
        <header>
            <NavBar />
            {/* <h1>Header de la página</h1> */}
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
            <Footer />
            {/* <h2>Footer de la página</h2> */}
        </footer>
    </>
  )
}