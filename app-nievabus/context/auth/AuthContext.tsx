import { createContext } from 'react';
import { IUsuarios } from '../../interfaces/usuarios/IUsuarios';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUsuarios;
    
    loginUser: (email: string, password: string) => Promise<boolean>;
    registerUser: (email: string, password: string, fullName: string ) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );



// const registerUser: (email: string, password: string, fullName: string) => Promise<IRespuestaApiAuth>





// import React from 'react';
// import { createContext } from 'react';
// import { IUsuarios } from '../../interfaces/usuarios/IUsuarios';
// import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

// interface ContextProps {
//     isLoggedIn: boolean;
//     user?: IUsuarios;
    
//     //firmas
//     loginUser: (email: string, password: string) => Promise<boolean>;
//     registerUser: (email: string, password: string, fullName: string ) => Promise<IRespuestaApiAuth>;
// }

// export const AuthContext  = createContext( {} as ContextProps );
