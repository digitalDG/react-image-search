import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const NoImage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={3}>
                <Typography>No images found for the search term. Try another search term...</Typography>
            </Grid>
        </Grid>
    )
};

export default NoImage;