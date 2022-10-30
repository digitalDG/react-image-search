import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import SearchBar from '@mkyy/mui-search-bar';
import { useImageAppContext } from '../contexts/app-context';

const Search = () => {

    const [searchValue, setSearchValue] = useState("");
    const { setSearchTerm, searchOptions, fetchData } = useImageAppContext();

    const placeholderText = "Enter a search term...";

    const handleSearch = () => {
        let apiParams = `api/?key=${process.env.REACT_APP_PIXABAY_CLIENT_ID}&q=${encodeURIComponent(`${searchValue}`)}&safesearch=${searchOptions.safeSearch}&per_page=${searchOptions.per_page}`;

        fetchData(apiParams);

        setSearchValue('');
        setSearchTerm(searchValue);
    };

    const handleInputChange = (newVal) => {
        setSearchValue(newVal);
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
                    let apiParams = `api/?key=${process.env.REACT_APP_PIXABAY_CLIENT_ID}&q=${encodeURIComponent(`${searchValue}`)}&safesearch=${searchOptions.safeSearch}&per_page=${searchOptions.per_page}`;

                    fetchData(apiParams);
                }}
                placeholder={placeholderText}
            />
        </Grid>
    );
};

export default Search;
