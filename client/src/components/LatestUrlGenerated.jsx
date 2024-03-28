import React from 'react';
import { Copy } from './Copy';

export function LatestUrlGenerated({ url }) {
    let enlace = window.location.href + url;
    return (
        <>
            {url === '' ? null :
                <>
                    <div className="flex items-center justify-center w-screen gap-4">
                        <a className='underline' href={enlace} target='_blank' rel="noreferrer">{enlace}</a>
                        {url === '' ? null : <Copy url={url} />}
                    </div>
                </>

            }
        </>

    )
}