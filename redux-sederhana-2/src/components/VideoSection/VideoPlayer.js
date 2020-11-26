import React from 'react'

const VideoPlayer = ({
  src,
}) => {
  return (
    <div>
      <video 
        width="100%" 
        autoPlay={true}
        controls={true}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;