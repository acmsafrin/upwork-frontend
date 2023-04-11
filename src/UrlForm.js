import React, { useState } from 'react';
import axios from 'axios';

function UrlForm(props) {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/shorten', url)
            .then(response => setShortUrl(response.data))
            .catch(error => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter a URL to shorten:</label>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button type="submit">Shorten URL</button>
            {shortUrl && (
                <div>
                    <p>Shortened URL:</p>
                    <a href={shortUrl}>{shortUrl}</a>
                </div>
            )}
        </form>
    );
}

export default UrlForm;
