import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UrlRedirect(props) {
    const [originalUrl, setOriginalUrl] = useState(null);

    useEffect(() => {
        axios.get(`/${props.shortUrl}`)
            .then(response => window.location.replace(response.request.responseURL))
            .catch(error => console.log(error));
    }, [props.shortUrl]);

    return (
        <div>
            {originalUrl ? (
                <p>Redirecting to: {originalUrl}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default UrlRedirect;
