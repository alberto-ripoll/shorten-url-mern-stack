import React from 'react';
import { Copy } from './Copy';

export function LatestUrlGenerated({ url }) {
    return (
        <div className="flex items-center justify-center w-screen gap-4">
            <a className='underline' href="{window.location.href}{url}" target='_blank'>{window.location.href}{url}</a>
            {url === '' ? null :<Copy url={url} /> }
        </div>
    )
}