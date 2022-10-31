import  { createContext, useContext, useState } from "react";

const ImageAppContext = createContext();


const ImageAppContextProvider = ({ children }) => {

    const defaultSearchOptions = {
        safeSearch: true,
        per_page: 30
    };

    const [searchOptions, setSearchOptions] = useState(defaultSearchOptions);
    const [searchTerm, setSearchTerm] = useState('');
    const [imageResults, setImageResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    return (
        <ImageAppContext.Provider value={{ searchTerm, setSearchTerm, searchOptions, setSearchOptions, imageResults, setImageResults, isLoading, setIsLoading, error, setError }}>
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
