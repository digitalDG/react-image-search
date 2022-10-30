import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container';
import NoImage from "./NoImage";
import { useImageAppContext } from '../contexts/app-context';

const ImageGallary = () => {


    const { imageResults, searchTerm } = useImageAppContext();
    const imageData = imageResults?.hits || [];


    return (
        <>
            {(searchTerm && imageData.length === 0) && <NoImage />}
            <Container>
                {imageData.length && searchTerm ?
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

/*
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
*/


export default ImageGallary