import useSWR, { SWRConfiguration } from 'swr';
import { IEmpleados } from '../interfaces/empleados/IEmpleados';


export const useEmpleados = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IEmpleados[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        empleados: data || [],
        isLoading: !error && data,
        isError: error
    }
}