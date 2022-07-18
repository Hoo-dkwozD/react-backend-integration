import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';

import './ErrorMessage.css'

function ErrorMessage() {
    return (
        <div id="error-message-card">
            <ErrorIcon />
            <p>An error occurred while retrieving the data. </p>
        </div>
    )
}

export default ErrorMessage;
