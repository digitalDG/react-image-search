import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  
  axios.defaults.baseURL = process.env.REACT_APP_IMAGE_SEARCH_PROVIDER_URL;

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data);
    } catch(err) {
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
    error,
    fetchData: url => fetchData(url)
  }
}

export default useAxios;