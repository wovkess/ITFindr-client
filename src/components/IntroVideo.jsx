import React from 'react';
import BackgroundVideo from "../media/BackgroundVideo.mp4"
import "../styles/App.css"
import { useState } from 'react';

const IntroVideo = () => {

    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleLoadedData = () => {
        setVideoLoaded(true);
    };
    return (
        <>
            {!videoLoaded && <div className="loader"></div>}
            <video
                className="IntroVideo"
                autoPlay
                muted
                loop
                preload="auto"
                onLoadedData={handleLoadedData}
                style={{ display: videoLoaded ? 'block' : 'none' }}
            >
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
        </>
        
    )
}

export default IntroVideo;