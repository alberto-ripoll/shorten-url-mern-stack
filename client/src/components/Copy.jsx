import React, { useState } from 'react';

export function Copy({ url }) {
    const [copySuccess, setCopySuccess] = useState(false);
    const [buttonClass, setButtonClass] = useState('bg-blue-500 hover:bg-indigo-700 bg-white text-black duration-150 hover:text-white py-2 px-4 rounded');


    async function handleCopy() {
        await navigator.clipboard.writeText(`${window.location.href}${url}`)
        setCopySuccess(!copySuccess);
        setButtonClass('flex items-center justify-center gap-x-2 px-6 py-2 text-center text-white duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 md:text-sm hover:text-black');
        setTimeout(() => {
            setCopySuccess(false);
            setButtonClass('bg-blue-500 hover:bg-indigo-700 bg-white text-black duration-150 hover:text-white py-2 px-4 rounded');
        }, 2000);
    }

    return (
        <>
        {copySuccess ? 
            <div className=" text-white p-2 rounded">
                Copied!
                </div>
                : 
            <button className={buttonClass}
                onClick={handleCopy}
            >
                {copySuccess ? 'Copied!' : 'Copy'}
            </button>
}

        </>

    )
}