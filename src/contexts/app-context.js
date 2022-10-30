import  { createContext, useContext, useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";

const ImageAppContext = createContext();


const ImageAppContextProvider = ({ children }) => {

    const defaultSearchOptions = {
        safeSearch: true,
        per_page: 30
    };

    const [searchOptions, setSearchOptions] = useState(defaultSearchOptions);
    const [searchTerm, setSearchTerm] = useState('');
    const [imageResults, setImageResults] = useState([]);
    
    let defaultApiParams = `api/?key=${process.env.REACT_APP_PIXABAY_CLIENT_ID}&q=${encodeURIComponent(`${searchTerm}`)}&safesearch=${searchOptions.safeSearch}&per_page=${searchOptions.per_page}`;

    const { response, isLoading, error, fetchData } = useAxios(defaultApiParams);

    
    useEffect(() => {

        setImageResults(response);
       
    }, [response])
    
    
    return (
        <ImageAppContext.Provider value={{ searchTerm, setSearchTerm, searchOptions, setSearchOptions, imageResults, setImageResults, fetchData, isLoading, error }}>
            {children}
        </ImageAppContext.Provider>
    );
};

const useImageAppContext = () => {
    const context = useContext(ImageAppContext);

    if (context === undefined) {
        throw new Error("useImageAppContext must be used within a ImageAppContextProvider");
    }

    return context;
};

export { ImageAppContextProvider, useImageAppContext };
