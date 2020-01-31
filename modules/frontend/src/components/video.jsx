import React from 'react';

const BASE_URL = "http://www.youtube.com/embed/";

const Video = ({videoId}) => {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-respnsive-item" src={`${BASE_URL}${videoId}`} title={`${videoId}`}/>
        </div>
    )
};

export default Video;
