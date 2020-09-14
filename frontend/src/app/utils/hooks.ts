import {useEffect, useState, Dispatch, SetStateAction} from 'react';

export function useFetch<T>(url: string):  [T[], Dispatch<SetStateAction<T[]>>] {
    const [data, setData] = useState<T[]>([]);
    useEffect(() => {
        (async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        })();
    }, [url]);
    return [data, setData];
}
