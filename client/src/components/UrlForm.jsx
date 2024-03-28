import React, { useState } from 'react';

export function UrlForm({ url, setUrl}) {
    const [enlace, setEnlace] = useState('');
    const [loading, setLoading] = useState(false);

    let loadingClass = loading ? 'animate-spin' : 'px-7 py-4 duration-150 bg-white rounded-lg hover:bg-indigo-700 hover:text-white active:shadow-lg text-black';

    const handleChange = (event) => {
        setEnlace(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response =
                await fetch('http://localhost:3000/shorten-url', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ url: enlace }),
                });
                const data = await response.json();
                setLoading(false);
                setUrl(data.url);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div className="max-w-lg px-4 mx-auto mt-24 flex-col gap-8">
            <div className="flex items-center text-gray-400 border rounded-md mb-4">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="http://www.example.com"
                    id="website-url"
                    className="w-full p-2.5 ml-2 bg-transparent outline-none"
                />
            </div>
            <button
                onClick={handleSubmit}
                className={`w-full text-white ${loadingClass}`}
            >
                Shorten
            </button>
        </div>
    )
}