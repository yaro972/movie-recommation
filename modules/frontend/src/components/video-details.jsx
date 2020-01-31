import React from 'react';

const VideoDetails = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
};

export default VideoDetails;
