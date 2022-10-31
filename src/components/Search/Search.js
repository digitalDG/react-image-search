import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import SearchBar from '@mkyy/mui-search-bar';
import { useImageAppContext } from '../../contexts/app-context';
import useAxios from "../../hooks/useAxios";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {

    const [searchValue, setSearchValue] = useState("");
    const [apiParams, setApiParams] = useState();

    const { setSearchTerm, searchOptions, setIsLoading, setError, setImageResults } = useImageAppContext();
    const debouncedVal = useDebounce(searchValue, 500);

    const placeholderText = "Enter a search term...";

    const { response, isLoading, error } = useAxios(apiParams);

    useEffect(() => {
        if (debouncedVal) {
            let apiParams2 = `api/?key=${process.env.REACT_APP_PIXABAY_CLIENT_ID}&q=${encodeURIComponent(`${debouncedVal}`)}&safesearch=${searchOptions.safeSearch}&per_page=${searchOptions.per_page}`;
            setApiParams(apiParams2);
            setSearchTerm(debouncedVal);
        } else {
            setApiParams('');
            setSearchTerm('');
        }

    }, [debouncedVal, searchOptions, setSearchTerm]);

    useEffect(() => {

        if (response) {
            if (response.length !== 0) {
                setImageResults(response);
                setIsLoading(isLoading);
                setError(error);
            } else {
                setImageResults([]);
                setIsLoading(false);
                setError(null);
            }

        } else {
            setImageResults([]);
            setIsLoading(false);
            setError(null);
        }

        setSearchTerm(searchValue);

    }, [response, error, setError, isLoading, setImageResults, setIsLoading, searchValue, setSearchTerm])


    const handleSearch = () => {
        if (searchValue) {
            setSearchValue(searchValue);
        } else {
            setSearchValue('');
        }
    };

    const handleInputChange = (newVal) => {
        if (newVal) {
            setSearchValue(newVal);
        } else {
            setImageResults([]);
            setSearchValue('');
            setSearchTerm('');
        }
    };

    return (
        <Grid container justifyContent="center" sx={{ mt: 5, mb: 5 }}>
            <SearchBar
                value={searchValue}
                onChange={newVal => handleInputChange(newVal)}
                onSearch={handleSearch}
                onCancelResearch={() => {
                    setSearchValue('');
                    setSearchTerm('');
                    setApiParams('');
                }}
                placeholder={placeholderText}
            />
        </Grid>
    );
};

export default Search;
