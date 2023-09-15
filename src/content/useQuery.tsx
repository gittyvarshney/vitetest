import {useEffect, useState} from 'react';
import axios from 'axios';
import { responseType, responseData} from './types';

export const useQuery = (page: number) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<responseType[]>([]);
    const [hasMore, sethasMore] = useState<boolean>(true);

    useEffect( () => {

        let req: ReturnType<typeof setTimeout> = setTimeout(
        () => { axios({
            method: 'GET',
            url: `https://api.github.com/repos/facebook/react/issues?page=${page}`,
        }).then((req: responseData) => {
            if(req && req.data && req.data.length > 0){
                setData( prevData => [ ...new Set([...prevData, ...req.data])])
                sethasMore(true); // we can still call for more pages as data is not yet exhausted
            }else{
                sethasMore(false); // if data exhausted then we should stop calling api by setting sethasMore to false
            }
            setLoading(false); // set Loading to false when we done fetching the data
            setError(false);

        }).catch( (e) => {
            setError(true); // if something went wrong set error to true
        } ) },
        500)
        setLoading(true); // set Loading to true When api is triggered
        return () => {
            clearTimeout(req)
        }
    }, [page])

    return [loading, error, data, hasMore] as const;
}