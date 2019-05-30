import {useEffect} from 'react';

export function useFetch<T>(url: string, callback: (data: T) => void) {
    useEffect(() => {
        (async () => {
            const res = await fetch(url);
            const data = await res.json();
            callback(data);
        })();
    }, []);
}
