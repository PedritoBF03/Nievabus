import useSWR, { SWRConfiguration } from 'swr';
import { IClientes } from '../interfaces/clientes/IClientes';


export const useClientes = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IClientes[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        clientes: data || [],
        isLoading: !error && data,
        isError: error
    }
}