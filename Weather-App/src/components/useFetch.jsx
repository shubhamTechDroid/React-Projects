import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url){

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {

        if(!url) return;

        const controller = new AbortController();

        const fetchData = async () => {
            try{
                setLoading(true);
                const res = await axios.get(url, {signal:controller.signal});
                setData(res.data);
                setError(null);
            }catch(err){
                if(axios.isCancel(err)) return;
                setError("Error Fetching Data");
            }finally{
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort();

    }, [url]);

    return {data,loading,error};
}