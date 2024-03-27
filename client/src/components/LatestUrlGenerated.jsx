import React from 'react';

export function LatestUrlGenerated({ url}) {
    return (
<div id="default-carousel" className="relative w-full" data-carousel="slide">
<div className="duration-700 ease-in-out" data-carousel-item>
    <p>{url}</p>
        </div>
</div>
    )
}