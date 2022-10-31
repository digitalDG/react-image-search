import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container';
import NoImage from "../NoImage/NoImage";
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import { useImageAppContext } from '../../contexts/app-context';

const ImageGallary = () => {


    const { imageResults, searchTerm, isLoading, error } = useImageAppContext();
    let imageData = [];
    let dataExists = false;
    if (imageResults?.hits) {
        dataExists = true;
        imageData = imageResults?.hits;
    }


    return (
        <>
            { isLoading && <LoadingIndicator /> }
            { error !== null && <p> Failed to load images </p> }
            {(dataExists && searchTerm.length && imageData.length === 0) && <NoImage />}
            <Container>
                {imageData.length ?
                    (
                        <ImageList
                            gap={12}
                            sx={{
                                mb: 8,
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))!important',

                            }}
                        >
                            {imageData.length ? imageData.map((item) => (
                                <ImageListItem key={item.id} sx={{ height: '100% !important' }}>
                                    <img
                                        src={item.previewURL}
                                        alt={'preview'}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.tags}
                                    />
                                </ImageListItem>
                            )) : null}
                        </ImageList>
                    )
                    : null
                }
            </Container>
        </>
    )
}

export default ImageGallary