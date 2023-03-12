
import { IUsuarios } from '../../interfaces/usuarios/IUsuarios';
import { AuthState } from "./";

type AuthActionType =
| { type: '[Auth] - Login', payload: IUsuarios }
| { type: '[Auth] - Logout' }


export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {
    switch (action.type){

        case '[Auth] - Login':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        case '[Auth] - Logout':
            return{
                ...state,
                isLoggedIn: false,
                user: undefined
            }
        default:
            return state
    }
}