import useSWR, { SWRConfiguration } from 'swr';
import { IViajes } from '../interfaces/viajes/IViajes';


export const useViajes = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IViajes[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        viajes: data || [],
        isLoading: !error && data,
        isError: error
    }
}