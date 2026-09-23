import React from 'react';

function ImageGallery() {
    const galleryStyle = {
        display: 'flex',
        gap: '10px'
    }
    return (
        <div style={galleryStyle}>
            <img src="https://moqimg.ru/400x400.gif" alt="gif 400*400" />
            <img src="https://moqimg.ru/800x400.webp" alt="webp 800*600" />
            <img src="https://moqimg.ru/400x400.png" alt="image png 400*400" />
        </div>
    )
}

export default ImageGallery;