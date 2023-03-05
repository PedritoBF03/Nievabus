import useSWR, { SWRConfiguration } from 'swr';
import { IAutobuses } from '../interfaces/autobuses/IAutobuses';


export const useAutobuses = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IAutobuses[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        autobuses: data || [],
        isLoading: !error && data,
        isError: error
    }
}