import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    axios.defaults.baseURL = process.env.REACT_APP_IMAGE_SEARCH_PROVIDER_URL;

    const fetchData = async (url) => {
        try {

            if (!url) {
                setResponse([]);
                setError(null);
                return;
            }

            setIsLoading(true);
            const res = await axios(url);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setResponse([]);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(param);
    }, [param]);

    return {
        response,
        isLoading,
        error    }
}

export default useAxios;