import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function LoadingSkeleton() {
    return (
        <Box sx={{ width: 300, marginTop: "1em" }}>
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="circular" width={40} height={40} animation="wave" />
            <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
        </Box>
    );
}

export default LoadingSkeleton;