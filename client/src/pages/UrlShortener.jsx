import React, { useState } from 'react';
import Header from '../components/Header';
import { LatestUrlGenerated } from '../components/LatestUrlGenerated';
import { UrlForm } from '../components/UrlForm';
import { Alert } from '../components/Alert';

export function UrlShortener() {
    const [url, setUrl] = useState('');

    return (
        <>
            <Header />
            <UrlForm url={url} setUrl={setUrl} />
            <hr className="m-10 h-0.5 border-t-0 dark:bg-white/10" />
            < LatestUrlGenerated url={url} />
            <Alert url={url}/>
        </>
    )

}