import { FC, useReducer, useEffect } from 'react';
import { AuthContext, authReducer  } from './';
import { IUsuarios } from '../../interfaces/usuarios/IUsuarios';
import nievabusApi from '../../api/NievabusApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IRespuestaApiAuth, IRespuestaLogin } from './interfaces/IRespuestaAuthApi';

export interface AuthState{
    isLoggedIn: boolean;
    user?: IUsuarios;
}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}
interface Props{
    chidren: any
}

export const AuthProvider:FC<{children: any}> = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
    
    useEffect( ()=>{
        checkToken()
    }, []);
    const checkToken = async() => {
        //llamar al endpoint
        //Revalidar el token y guardar en cockies
        //dispatch login

        //Mal --> borrar token de las cockies
    }

    const loginUser = async (email: string, password: string):Promise<boolean> => {
        try {
            const { data } = await nievabusApi.post('/usuarios/login', { email, password });
            console.log(data);
            const { token, user } = data;
            console.log(user);
            Cookies.set('token', token);
            Cookies.set('rol', user.roles);
            Cookies.set('FullName', user.fullName); 
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) { //credenciales falsas
            return false;
        }
    } 
                         //   {...user}
    const registerUser = async (email: string, password: string, fullName: string ):Promise<IRespuestaApiAuth>=> {
        try {
            const { data } = await nievabusApi.post ('/usuarios/register', { email, fullName, password })
            const { token, user } = data;
            Cookies.set('token', token);
            // Cookies.set('rol', user.roles[0]);
            Cookies.set('rol', user.roles);
            Cookies.set('Fullname', user.fullName);
            //mando a llamar al login pq ya se autenticó
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false,
                message: 'Usuario creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el usuario, intentaló de nuevo'
            }
        }
    }



    const registerViaje = async (descripcion: string, destino: string, hora_inicio: string, ida_vuelta: string, imagen: string, origen: string, precio: string, referencia: string, dniCliente: string, dniEmpleado: string ):Promise<IRespuestaApiAuth>=> {
        try {
            const { data } = await nievabusApi.post ('/viajes', { descripcion, destino, hora_inicio, ida_vuelta, imagen, origen, precio, referencia, dniCliente, dniEmpleado})

            return {
                hasError: false,
                message: 'Viaje creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el viaje, intentaló de nuevo'
            }
        }
    }



    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser,
            registerViaje
        }}>
            { children }
        </AuthContext.Provider>
    )
}